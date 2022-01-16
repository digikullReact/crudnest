import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("mysql://root:1234@localhost:3306/test");

export class Person extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public preferredName!: string | null; // for nullable fields
}

Person.init(
  {
    PersonID: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    FirstName: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    LastName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    Address: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },

    City: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: "Persons",
    sequelize, // passing the `sequelize` instance is required
  }
);



/*

async function doStuffWithUserModel() {
  const newUser = await User.create({
    name: "Johnny",
    preferredName: "John",
  });
  console.log(newUser.id, newUser.name, newUser.preferredName);

  const foundUser = await User.findOne({ where: { name: "Johnny" } });
  if (foundUser === null) return;
  console.log(foundUser.name);
}
*/