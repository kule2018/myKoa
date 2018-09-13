import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', {
  orderBy: {
    score: 'DESC'
  }
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  userId: number;

  @Column()
  userName: string;

  @Column()
  avatar: string;

  @Column()
  score: number;
}
