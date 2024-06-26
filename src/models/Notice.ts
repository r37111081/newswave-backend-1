import mongoose, { Document, Schema } from 'mongoose'

export interface INotice extends Document {
  articleId: string,
  topic: string[],
  title: string,
  content: string,
  publishedAt: string
}

const noticeSchema = new Schema<INotice>(
  {
    articleId: { type: String, default: '' },
    topic: { type: [String], default: [] },
    title: { type: String, required: true },
    content: { type: String, required: true },
    publishedAt: { type: String, default: '' }
  },
  {
    versionKey: false
  }
)

noticeSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id
    return ret
  }
})

const Notice = mongoose.model('Notice', noticeSchema)

export default Notice
