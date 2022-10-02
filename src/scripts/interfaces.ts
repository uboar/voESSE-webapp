
//置き換えテキスト
export interface ReplaceText {
  before: string
  after: string
}

//設定
export interface Config {
  engine: string
  tamiyasu: {
    path: string
    argument: string
  }
  voicevox: {
    apiURL: string
    speakerId: number
  }
  ecce: {
    subscriptionKey: string
    knowledgePath: string
    l2ReturnNum: number
    l3ReturnNum: number
  }
  inputReplaceText: Array<ReplaceText>
  outputReplaceText: Array<ReplaceText>
}

//VOICEVOXの話者データ
export interface VoicevoxSpeakersSchema {
  name: string
  speaker_uuid: string
  styles: Array<{
    id: number
    name: string
  }>
  version: string
}

//ECCEのリクエストボディ
export interface ECCERequestSchema {
  knowledgePath: string
  query: string
  dialogHistory: Array<string>
  l2ReturnNum?: number
  l3ReturnNum?: number
}

//ECCEのレスポンスボディ
export interface ECCEResponseSchema {
  resultResponseType: string
  resultResponseText: string
  responses: Array<{
    type: string
    text: string
    score: number
    kgcKeyword?: string
  }>
  l2Docs: Array<string>
  l3Docs: Array<string>
  type: string
}