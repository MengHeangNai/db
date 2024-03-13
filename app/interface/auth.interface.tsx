import { supabase } from "../../supabase"

export interface IUser {
  key: string
  created_at: Date
  created_by: any
  displayName?: any
  phoneNumber: string | null
  phone: string | null
  country: any
  first_name_en?:string | null
  last_name_en?:string | null
  status:any;
  photoUrl: string | null
  user_name: string | null
}

export interface INodeData {
  parent_node: string | null;
  node_name: string;
  node_order: number;
  node_level: number;
}
export interface ICommittee {
  allow_applications?: string[];
  appKey?: string | null;
  is_assistant?: boolean
  borderPostId?: number;
  code: string;
  codeKey: string;
  committee_category: any;
  committee_path: any;
  commune: any;
  created_at?: any;
  created_by?: any;
  deleted_at?: any;
  deleted_by?: any;
  district: any;
  file: any;
  isDelete?: boolean;
  isPost?: boolean;
  key: string;
  keywords: any;
  mou?: boolean;
  name: string;
  nameKey: string;
  node_data: INodeData | null,
  page_key?: any;
  province: any;
  short_name: string | null;
  short_name_key: string;
  status?: any;
  sub_of: any;
  updated_at?: any;
  updated_by?: any;
  village: any;
  document_role_working_with_keys: string[]
  document_role_organization_chart_range_array?: any[];
  document_role_organization_chart_range_keys?: string[];
}

export interface IOfficer {
  key: string;
  status: any;
  isDelete: boolean;
  created_at: any;
  created_by: any;
  updated_by?: any;
  updated_at?: any;
  deleted_by?: any;
  deleted_at?: any;
  date_key?: any;
  page_key?: any;
  keyword: string[];

  officerIdNo: number;
  officerId: string;
  first_name: string;
  last_name: string;
  first_name_en: string;
  last_name_en: string;

  currentTitle: string;

  displayName: string;
  nameKey: string;
  file?: any;
  title: any;

  generalDepartment: any;
  department: any;

  workingOffices: any[];
  position: any[];
  positionKeys: string[];
  officeKeys: string[];
  company: any;
  isAdmin: boolean;
  role: any;

  stampFile: any;
  signatureFile: any;

  workplace: any[];
  workplaceKeys: string[];
  currentPosition?: any
  currentDepartment?: any;
}
