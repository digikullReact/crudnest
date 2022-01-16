import { Controller, Post,Get,Body,Put, Delete,Param } from '@nestjs/common';
import { CrudService } from './crud.service';


@Controller()
export class CrudController {
  constructor(
      private service:CrudService
  ) {}


  @Post("/api/create")
  create(
    @Body('PersonID') PersonID: number,
    @Body('LastName') LastName: string,
    @Body('FirstName') FirstName: string,
    @Body('Address') Address: string,
    @Body('City') City: string,
  ): Promise<any>  {
    return this.service.createData(PersonID,
        LastName,
        FirstName,
        Address,
        City)
  }

  @Put("/api/update")
  update(
    @Body('PersonID') PersonID: number,
    @Body('LastName') LastName: string,
    @Body('FirstName') FirstName: string,
    @Body('Address') Address: string,
    @Body('City') City: string,
  ): Promise<any>  {
    return this.service.updateData(PersonID,
        LastName,
        FirstName,
        Address,
        City)
  }



  @Get("/api/data")
  async getData(): Promise<any> {
      const data=this.service.getAllData();
      return data;

   
  }

  @Delete("/api/deleteData/:PersonId")
  async deleteData(@Param('PersonId') PersonId: number): Promise<any> {
      const data=this.service.deleeData(PersonId)
      return data;

   
  }
  

}
