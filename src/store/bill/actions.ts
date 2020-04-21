import { BillItem, ServiceCharge } from '../../types'
import {
  ADD_BILL_ITEM,
  BILL_ITEM_UPDATE_PERSON_ID,
  DELETE_BILL_ITEM,
  UPDATE_SERVICE_CHARGE,
} from './types'

export interface AddBillItem {
  type: ADD_BILL_ITEM
  payload: BillItem
}

export interface DeleteBillItem {
  type: DELETE_BILL_ITEM
  payload: BillItem
}

export interface UpdatePersonId {
  itemId: string
  personId: string
}

export interface UpdateBillItemPersonId {
  type: BILL_ITEM_UPDATE_PERSON_ID,
  payload: UpdatePersonId
}

export type BillAction = AddBillItem | DeleteBillItem

export interface UpdateServiceCharge {
  type: UPDATE_SERVICE_CHARGE,
  payload: number
}

export type ServiceChargeAction = UpdateServiceCharge

export const addBillItem = (item: BillItem): AddBillItem => ({
  type: ADD_BILL_ITEM,
  payload: item,
}
)

export const deleteBillItem = (item: BillItem): DeleteBillItem => ({
  type: DELETE_BILL_ITEM,
  payload: item,
})

export const updateServiceCharge = (value: ServiceCharge): UpdateServiceCharge => ({
  type: UPDATE_SERVICE_CHARGE,
  payload: value,
})

export const updatebillItemPersonId = ({ itemId, personId }: UpdatePersonId): UpdateBillItemPersonId => ({
  type: BILL_ITEM_UPDATE_PERSON_ID,
  payload: { itemId, personId },
})
