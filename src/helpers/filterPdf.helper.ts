
export const pdffileFilter = (
    req: Express.Request,
    file: Express.Multer.File,
    callback,
) => {

    //Este archivo no existe o no viene entonces:
    if(!file) return callback(new Error('Archivo vacio'), false);

    //Llegamos hasta el mimetype y tomamos la extension del archivo 
    const fileExtension = file.mimetype.split('/')[1]; //(el .split sirve para hacer un salto a la ruta)

    //Estas serian las extensiones validas para los archivos los que estan dentro del arreglo 
    //son los que vendran o los esperados
    const validExtension = ['pdf','PDF'];

    //Si las extensiones validas incluyen la extension de archivo 
    if (validExtension.includes(fileExtension)) {
        return callback(null, true);
    }

    callback(null, false);
};
