// export class FormDataModel {
//     property1: string;
//     property2: number;
//     //...
//   }

export interface createCourse {
    title: string,
    slug : string,
    code : string,
    status : string,
    description : string
}

export interface infoCourse {
    id: number;
    avatar: string;
    title: string;
    slug: string;
    description: string;
    code: string;
    status: number;
  }