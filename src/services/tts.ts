/**
 * Text-to-Speech (TTS) Service using Web Speech API (SpeechSynthesis)
 * Tailored for Indonesian math educational instruction (Pengajar: Mister Jo)
 */

export interface TTSState {
  isPlaying: boolean;
  isPaused: boolean;
  currentText: string;
  rate: number;
  voiceName: string;
}

type TTSListener = (state: TTSState) => void;

class TTSService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private indonesianVoice: SpeechSynthesisVoice | null = null;
  private listeners: Set<TTSListener> = new Set();
  private rate: number = 0.95; // slightly deliberate for clarity on IFP
  private state: TTSState = {
    isPlaying: false,
    isPaused: false,
    currentText: '',
    rate: 0.95,
    voiceName: 'Default Indonesian Voice',
  };

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Look for id-ID or Indonesian voices
    const idVoice =
      voices.find((v) => v.lang.toLowerCase().includes('id-id') || v.lang.toLowerCase() === 'id') ||
      voices.find((v) => v.name.toLowerCase().includes('indonesia')) ||
      voices.find((v) => v.lang.startsWith('id')) ||
      voices[0] ||
      null;

    this.indonesianVoice = idVoice;
    if (idVoice) {
      this.state.voiceName = idVoice.name;
    }
    this.notify();
  }

  public subscribe(listener: TTSListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener({ ...this.state }));
  }

  public cleanMathText(rawText: string): string {
    return rawText
      .replace(/π/g, ' pi ')
      .replace(/r²/g, ' jari-jari kuadrat ')
      .replace(/r³/g, ' jari-jari pangkat tiga ')
      .replace(/t²/g, ' tinggi kuadrat ')
      .replace(/s²/g, ' garis pelukis kuadrat ')
      .replace(/cm²/g, ' sentimeter persegi ')
      .replace(/cm³/g, ' sentimeter kubik ')
      .replace(/m²/g, ' meter persegi ')
      .replace(/m³/g, ' meter kubik ')
      .replace(/(\d+)\/(\d+)/g, '$1 per $2')
      .replace(/×/g, ' dikali ')
      .replace(/÷/g, ' dibagi ')
      .replace(/√\((.*?)\)/g, 'akar dari $1')
      .replace(/√(.*?)/g, 'akar dari $1')
      .replace(/=/g, ' sama dengan ')
      .replace(/\+/g, ' ditambah ')
      .replace(/-/g, ' dikurang ')
      .replace(/Lp\s*=/gi, 'Luas permukaan sama dengan ')
      .replace(/Ls\s*=/gi, 'Luas selimut sama dengan ')
      .replace(/La\s*=/gi, 'Luas alas sama dengan ')
      .replace(/Ka\s*=/gi, 'Keliling alas sama dengan ')
      .replace(/V\s*=/gi, 'Volume sama dengan ')
      .replace(/d\s*=\s*2r/gi, 'diameter sama dengan dua kali jari-jari')
      .replace(/\s+/g, ' ')
      .trim();
  }

  public speak(textToSpeak: string, customCleanedText?: string): void {
    if (!this.synth) {
      console.warn('Web Speech API is not supported in this browser.');
      return;
    }

    // Cancel existing speech
    this.synth.cancel();

    const text = customCleanedText ? customCleanedText : this.cleanMathText(textToSpeak);

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = this.rate;
    utterance.pitch = 1.0;

    if (this.indonesianVoice) {
      utterance.voice = this.indonesianVoice;
    }

    utterance.onstart = () => {
      this.state.isPlaying = true;
      this.state.isPaused = false;
      this.state.currentText = textToSpeak;
      this.notify();
    };

    utterance.onend = () => {
      this.state.isPlaying = false;
      this.state.isPaused = false;
      this.state.currentText = '';
      this.notify();
    };

    utterance.onerror = (e) => {
      // Don't treat manual cancellation as an error
      if (e.error !== 'canceled') {
        console.error('TTS Error:', e);
      }
      this.state.isPlaying = false;
      this.state.isPaused = false;
      this.state.currentText = '';
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pause(): void {
    if (this.synth && this.state.isPlaying && !this.state.isPaused) {
      this.synth.pause();
      this.state.isPaused = true;
      this.notify();
    }
  }

  public resume(): void {
    if (this.synth && this.state.isPaused) {
      this.synth.resume();
      this.state.isPaused = false;
      this.notify();
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.state.isPlaying = false;
      this.state.isPaused = false;
      this.state.currentText = '';
      this.notify();
    }
  }

  public setRate(newRate: number): void {
    this.rate = Math.max(0.7, Math.min(1.5, newRate));
    this.state.rate = this.rate;
    this.notify();
  }

  public getState(): TTSState {
    return { ...this.state };
  }
}

export const tts = new TTSService();
