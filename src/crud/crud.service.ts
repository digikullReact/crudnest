import { Injectable } from '@nestjs/common';
import { Person } from 'src/models/user.model';

@Injectable() // dependency injection 
export class CrudService {
 async getAllData(): Promise<any> {

    const foundUser = await Person.findAll();

    return foundUser

  
  }

  async createData( PersonID:number,
    LastName: string,
    FirstName :string,
    Address: string,
    City :string): Promise<any> {

    const foundUser = await await Person.create({
      PersonID:PersonID,
      LastName: LastName,
      FirstName: FirstName,
      Address:Address,
      City:City
    });

    return foundUser

  
  }


  async updateData( PersonID:number,
    LastName: string,
    FirstName :string,
    Address: string,
    City :string): Promise<any> {

      const query:any={};
      if(City){
        query["City"]=City
      }
      if(LastName){
        query["LastName"]=LastName
      }

      if(FirstName){
        query["FirstName"]=FirstName
      }


      if(Address){
        query["Address"]=Address
      }


  



    const foundUser = await Person.update(query, {
      where: {
        PersonID: PersonID
      }
    });

    return foundUser

  
  }

  async deleeData(PersonID:number) :Promise<any> {
    

   const deleted= await Person.destroy({
      where: {
        PersonID: PersonID
      }
    });
    return deleted;
  }

 
}
