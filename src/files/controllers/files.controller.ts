import { Controller, Post, Get, Res, Param, UseInterceptors, UploadedFile,BadRequestException }from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilter } from 'src/helpers/fileFilter.helper';
import { FilesService } from '../services/files.service';
import { fileNamer } from '../../helpers/fileNamer.helper';
import { Response } from 'express';

@Controller('files')
export class FilesController {
    constructor(
        private readonly filesService: FilesService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        //Llamamos al fileFilter de muter y le asignamos nuestro helper
        fileFilter: fileFilter,

        //Definimos el almacenamiento donde se va aguardar y lo renombramos
        storage: diskStorage({
            destination: './static/products/',
            filename: fileNamer,
        })
    
    }))
    uploadImage(@UploadedFile() file: Express.Multer.File){
        if(!file) {
            throw new BadRequestException('Asegurese que el archivo sea una imagen');
        }
        const  url  = `${file.filename}`;

        return { url };
    }
    @Get('product/:imageName')
    findProduct(@Res() res:Response, @Param('imageName') imageName: string) {
        const path = this.filesService.getStaticImageName(imageName);

        // return path;
        res.sendFile(path);
    }
    @Get('user/:imageName')
    findUser(@Res() res:Response, @Param('imageName')imageName:string) {
        const path = this.filesService.getStaticImageName(imageName);
    
            //return path;
            res.sendFile(path);
            return path;
    }
}