import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, UpdateDateColumn } from "typeorm"
import { Auth } from './Auth';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'created_at', type: 'timestamptz', default: () => 'NOW()', nullable: false })
    createdAt

    @UpdateDateColumn({ name: 'modified_at', type: 'timestamptz', default: () => 'NOW()', nullable: false, onUpdate: "NOW()" })
    modifiedAt

    @Column({
        length: 50,
        nullable: false
    })
    firstName: string

    @Column({
        length: 50,
        nullable: false
    })
    lastName: string

    @Column()
    age: number

    @OneToOne(type => Auth, auth => { auth.id }, { cascade: true })
    @JoinColumn({ name: 'auth_id' })
    auth: Auth

}
