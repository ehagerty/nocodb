import {IWebhookNotificationAdapter, XcWebhookNotificationPlugin} from "nc-plugin";

import Teams from "./Teams";


class TeamsPlugin extends XcWebhookNotificationPlugin {

  private static notificationAdapter: Teams;

  public  getAdapter(): IWebhookNotificationAdapter {
    return TeamsPlugin.notificationAdapter;
  }

  public async init(_config: any): Promise<any> {
    TeamsPlugin.notificationAdapter = new Teams();
    await TeamsPlugin.notificationAdapter.init();
  }

}

export default TeamsPlugin;
