
import  { v4 as id } from 'uuid';

export const fileNamer = (
    req: Express.Request,
    file: Express.Multer.File,
    callback,

) => {
    //Este archivo no existe o no viene entonces:
    if(!file) return callback(new Error('Archivo vacio'), false);

    //Llegamos hasta el mimetype y tomamos la extension del archivo 
    const fileExtension = file.mimetype.split('/')[1]; //(el .split sirve para hacer un salto a la ruta)

    //Creo una interpolacion, uniendo el uuid con la extension del archivo
    const fileNamer =  `${id()}.${fileExtension}`;

    //Retorna el nombre del archivo
    callback(null, fileNamer, file);
    
};