import { initWhisper } from 'whisper.rn'
const { myString } = require('./App');
const whisperContext = await initWhisper({
    filePath: 'file://.../ggml-base.en.bin',
    isBundleAsset: false, // Set to true if you want to load the model from bundle resources, the filePath will be like `ggml-base.en.bin`
  })
  const sampleFilePath = myString
  const options = { language: 'he' }
  
  const { stop, promise } = whisperContext.transcribe(sampleFilePath, options)

const { result } = await promise

export const Res = result;