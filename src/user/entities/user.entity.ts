import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  user_id!: number;

  @Column({ name: 'email' })
  email!: string;

  @Column({ name: 'name' })
  name!: string;

  @Column({ name: 'isActive' })
  isActive!: boolean;

  @Column({ name: 'phone', nullable: true })
  phone?: string;

  @Column({ name: 'created_at', type: 'timestamptz' })
  created_at!: Date;

  @Column({ name: 'removed_at', type: 'timestamptz', nullable: true })
  removed_at?: Date;
}
