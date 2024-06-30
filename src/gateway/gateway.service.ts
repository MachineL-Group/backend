import { Injectable } from '@nestjs/common'
import { GatewayMlRepository } from './repository/gateway-ml.repository'

@Injectable()
export class GatewayService {
    constructor(
        private readonly gatewayMlRepository: GatewayMlRepository,
    ) { }

    async predictAsl(file: Express.Multer.File) {
        return await this.gatewayMlRepository.httpPostPredictionAsl(file)
    }
}