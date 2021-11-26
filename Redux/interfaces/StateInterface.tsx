export interface IState{
  id: String
  productImage: string,
  productTitle: string,
  productSubDetail: string,
  productDescription:string

}

export interface IStateFinal {
  data: IState[]
}

export type ProductAction = {
  type: string
  data: IStateFinal
}

export type DispatchType = (args: ProductAction) => ProductAction
