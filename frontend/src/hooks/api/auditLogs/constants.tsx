import { EventType, UserAgentType } from "./enums";

export const eventToNameMap: { [K in EventType]: string } = {
  [EventType.GET_SECRETS]: "List secrets",
  [EventType.GET_SECRET]: "Read secret",
  [EventType.CREATE_SECRET]: "Create secret",
  [EventType.UPDATE_SECRET]: "Update secret",
  [EventType.DELETE_SECRET]: "Delete secret",
  [EventType.GET_WORKSPACE_KEY]: "Read project key",
  [EventType.AUTHORIZE_INTEGRATION]: "Authorize integration",
  [EventType.UNAUTHORIZE_INTEGRATION]: "Unauthorize integration",
  [EventType.CREATE_INTEGRATION]: "Create integration",
  [EventType.DELETE_INTEGRATION]: "Delete integration",
  [EventType.ADD_TRUSTED_IP]: "Add trusted IP",
  [EventType.UPDATE_TRUSTED_IP]: "Update trusted IP",
  [EventType.DELETE_TRUSTED_IP]: "Delete trusted IP",
  [EventType.CREATE_SERVICE_TOKEN]: "Create service token",
  [EventType.DELETE_SERVICE_TOKEN]: "Delete service token",
  [EventType.CREATE_IDENTITY]: "Create identity",
  [EventType.UPDATE_IDENTITY]: "Update identity",
  [EventType.DELETE_IDENTITY]: "Delete identity",
  [EventType.LOGIN_IDENTITY_UNIVERSAL_AUTH]: "Login via universal auth",
  [EventType.ADD_IDENTITY_UNIVERSAL_AUTH]: "Add universal auth",
  [EventType.UPDATE_IDENTITY_UNIVERSAL_AUTH]: "Update universal auth",
  [EventType.GET_IDENTITY_UNIVERSAL_AUTH]: "Get universal auth",
  [EventType.CREATE_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRET]: "Create universal auth client secret",
  [EventType.REVOKE_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRET]: "Revoke universal auth client secret",
  [EventType.GET_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRETS]: "Get universal auth client secrets",
  [EventType.CREATE_ENVIRONMENT]: "Create environment",
  [EventType.UPDATE_ENVIRONMENT]: "Update environment",
  [EventType.DELETE_ENVIRONMENT]: "Delete environment",
  [EventType.ADD_WORKSPACE_MEMBER]: "Add member",
  [EventType.REMOVE_WORKSPACE_MEMBER]: "Remove member",
  [EventType.CREATE_FOLDER]: "Create folder",
  [EventType.UPDATE_FOLDER]: "Update folder",
  [EventType.DELETE_FOLDER]: "Delete folder",
  [EventType.CREATE_WEBHOOK]: "Create webhook",
  [EventType.UPDATE_WEBHOOK_STATUS]: "Update webhook status",
  [EventType.DELETE_WEBHOOK]: "Delete webhook",
  [EventType.GET_SECRET_IMPORTS]: "List secret imports",
  [EventType.CREATE_SECRET_IMPORT]: "Create secret import",
  [EventType.UPDATE_SECRET_IMPORT]: "Update secret import",
  [EventType.DELETE_SECRET_IMPORT]: "Delete secret import",
  [EventType.UPDATE_USER_WORKSPACE_DENIED_PERMISSIONS]: "Update denied permissions",
  [EventType.UPDATE_USER_WORKSPACE_ROLE]: "Update user role",
  [EventType.CREATE_CA]: "Create CA",
  [EventType.GET_CA]: "Get CA",
  [EventType.UPDATE_CA]: "Update CA",
  [EventType.DELETE_CA]: "Delete CA",
  [EventType.GET_CA_CSR]: "Get CA CSR",
  [EventType.GET_CA_CERT]: "Get CA certificate",
  [EventType.SIGN_INTERMEDIATE]: "Sign intermediate",
  [EventType.IMPORT_CA_CERT]: "Import CA certificate",
  [EventType.GET_CA_CRL]: "Get CA CRL",
  [EventType.ISSUE_CERT]: "Issue certificate",
  [EventType.GET_CERT]: "Get certificate",
  [EventType.DELETE_CERT]: "Delete certificate",
  [EventType.REVOKE_CERT]: "Revoke certificate",
  [EventType.GET_CERT_BODY]: "Get certificate body"
};

export const userAgentTTypeoNameMap: { [K in UserAgentType]: string } = {
  [UserAgentType.WEB]: "Web",
  [UserAgentType.CLI]: "CLI",
  [UserAgentType.K8_OPERATOR]: "K8s operator",
  [UserAgentType.TERRAFORM]: "Terraform",
  [UserAgentType.NODE_SDK]: "InfisicalNodeSDK",
  [UserAgentType.PYTHON_SDK]: "InfisicalPythonSDK",
  [UserAgentType.OTHER]: "Other"
};
