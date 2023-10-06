import { pdfFilesController } from './controllers/pdfFiles.controller';
import { Module } from "@nestjs/common";
import { pdfFilesService } from './services/pdfFiles.service';

@Module({
    controllers: [pdfFilesController],
    providers: [pdfFilesService],
})

export class pdfFilesModule{}