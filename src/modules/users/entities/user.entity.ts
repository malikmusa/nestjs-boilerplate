export class RequestedUser {
  id: number;
  name: string;
  email: string;
  username: string;
  subUnitId: number;
  adminSubUnitId: number;
  serviceId?: number;
  commandId?: number;
  baseAdminId?: number;
  createdAt: string;
  updatedAt: string;
  roles: string[];
}
