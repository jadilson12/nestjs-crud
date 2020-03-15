import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;
}
