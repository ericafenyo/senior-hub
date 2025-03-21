import { fetchPermissions } from "@/api/roles/get-permissions";
import { Permission } from "@/types/permission";

/**
 * A service class for managing roles and permissions.
 */
export class Roles {
  /**
   * Get the permissions for a role.
   * @param roleId The ID of the role.
   */
  static getPermissions = async (roleId: string): Promise<string[]> => {
    return fetchPermissions(roleId)
      .then(performance => performance.map((permission: Permission) => permission.name));
  };
}
