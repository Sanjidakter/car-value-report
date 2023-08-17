import { Exclude } from 'class-transformer';
import{Entity,Column,PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()

    id:number;

    @Column()
    email:string;

    @Column()
    @Exclude()
    password:string;

    @AfterInsert()
    logInsert(){
        console.log('Inserted user with id',this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated user with id', this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log('Remove user with id', this.id);
    }
}