/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  bitbucketAuthApiRef,
  githubAuthApiRef,
  gitlabAuthApiRef,
  googleAuthApiRef,
  microsoftAuthApiRef,
  oktaAuthApiRef,
  oneloginAuthApiRef,
} from '@backstage/core-plugin-api';
import { Config } from '@backstage/config';
import { getRootLogger, loadBackendConfig } from '@backstage/backend-common';

type Provider = {
  id: string;
  title: string;
  message: string;
  apiRef: any;
};

export const providers = () => {
  const providerList: Provider[] = [];

  let config: Config | undefined;

  loadBackendConfig({
    argv: process.argv,
    logger: getRootLogger(),
  }).then(loadedConfig => {
    config = loadedConfig;
  });

  if (config === undefined) {
    return [];
  }

  const authProvidersConfig = config.getConfig('auth.providers') || [];

  authProvidersConfig.map(authProviderConfig => {
    const id = authProviderConfig.getString('id');
    const title = authProviderConfig.getString('title');
    const message = authProviderConfig.getString('message');
    switch (id) {
      case 'github':
        providerList.push({ id, title, message, apiRef: githubAuthApiRef });
        break;
      case 'gitlab':
        providerList.push({ id, title, message, apiRef: gitlabAuthApiRef });
        break;
      case 'bitbucket':
        providerList.push({ id, title, message, apiRef: bitbucketAuthApiRef });
        break;
      case 'google':
        providerList.push({ id, title, message, apiRef: googleAuthApiRef });
        break;
      case 'microsoft':
        providerList.push({ id, title, message, apiRef: microsoftAuthApiRef });
        break;
      case 'okta':
        providerList.push({ id, title, message, apiRef: oktaAuthApiRef });
        break;
      case 'onelogin':
        providerList.push({ id, title, message, apiRef: oneloginAuthApiRef });
        break;
      default:
        break;
    }
  });

  return providerList;
};
