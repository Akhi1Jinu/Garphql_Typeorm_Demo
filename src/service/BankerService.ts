import { UserData } from "../DataSource/DataSource";
import { Banker } from "../Entity/Banker"


export const getBankers = async(): Promise<Banker[]> => {
    const banker = UserData.getRepository(Banker);
    const datas = await banker.find()
    return datas;
}


export const getBanker = async(banker_id: any) => {
    const banker = UserData.getRepository(Banker);
    const data = await banker.findOne({where:{id: banker_id}})
    return data;
}

export const insertBanker = async(args: any) => {
    const banker = UserData.getRepository(Banker);
    const data = await banker.save(args);
    return data
}

export const deleteBanker = async(banker_id: any) => {
    const banker = UserData.getRepository(Banker);
    const data = await banker.delete(banker_id);
    return "Data delted"
}



