import { pdffileFilter } from './../../helpers/filterPdf.helper';
import { Controller, Post, UseInterceptors, UploadedFile,BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileNamer } from '../../helpers/fileNamer.helper';
import { pdfFilesService } from '../services/pdfFiles.service';

@Controller('pdffiles')
export class pdfFilesController {
    constructor(
        private readonly pdffilesService: pdfFilesService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        //Llamamos al fileFilter de muter y le asignamos nuestro helper
        fileFilter: pdffileFilter,

        //Definimos el almacenamiento donde se va aguardar y lo renombramos
        storage: diskStorage({
            destination: './Files/PdfArchivos/',
            filename: fileNamer,
        })
    }))
    uploadImage(@UploadedFile() file: Express.Multer.File){
        if(!file) {
            throw new BadRequestException('Asegurese que el archivo sea un pdf');
        }
        return {
            fileName: file.filename,
        };
    }
}