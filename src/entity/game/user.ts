import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user', {
  orderBy: {
    score2: 'DESC'
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
  avatar2: string;

  @Column()
  score2: number;
}
