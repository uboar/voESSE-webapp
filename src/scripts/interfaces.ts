export interface ReplaceText {
  before: string
  after: string
}

export interface Settings {
  engine: string
  tamiyasu: {
    path: string
    argument: string
  }
  voicevox: {
    apiUrl: string
    apiKey: string
    speakerId: Number
    defaultPitch: Number
    defaultIntonationScale: Number
    defaultSpeed: Number
  }
  ecce: {
    subscriptionKey: string
    knowledgePath: string
    l2ReturnNum: Number
    l3ReturnNum: Number
  }
}

export interface VoicevoxSpeakersSchema {
  name: string
  speaker_uuid: string
  styles: Array<{
    id: number
    name: string
  }>
  version: string
}