import { Document } from 'mongoose';

export interface Product extends Document {
  readonly _id: string;
  readonly name: string;
}
