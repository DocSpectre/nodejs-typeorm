import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { User } from './User';

@Entity()
export class Auth {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'created_at', type: 'timestamptz', default: () => 'NOW()', nullable: false })
    createdAt

    @Column({ name: 'modified_at', type: 'timestamptz', default: () => 'NOW()', nullable: false, onUpdate: "NOW()" })
    modifiedAt

    @Column({ nullable: false })
    username: string

    @Column({ nullable: false })
    password: string
}
