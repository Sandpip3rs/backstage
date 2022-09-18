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
  configApiRef,
  githubAuthApiRef,
  gitlabAuthApiRef,
  googleAuthApiRef,
  microsoftAuthApiRef,
  oktaAuthApiRef,
  oneloginAuthApiRef,
  useApi,
} from '@backstage/core-plugin-api';
import {Config} from '@backstage/config';

type Provider = {
  id: string;
  title: string;
  message: string;
  apiRef: any;
};

export const providers = () => {
  const providerList: Provider[] = [];

  const config = useApi(configApiRef);
  const configuredProviders: Config | undefined =
    config.getOptionalConfig('auth.providers');

  if (configuredProviders === undefined) {
    return providerList;
  }

  if (configuredProviders.has('google')) {
    providerList.push({
      id: 'google',
      title: 'Google',
      message: 'Sign in using Google',
      apiRef: googleAuthApiRef,
    });
  }

  if (configuredProviders.has('github')) {
    providerList.push({
      id: 'github',
      title: 'GitHub',
      message: 'Sign in using GitHub',
      apiRef: githubAuthApiRef,
    });
  }

  if (configuredProviders.has('gitlab')) {
    providerList.push({
      id: 'gitlab',
      title: 'GitLab',
      message: 'Sign in using GitLab',
      apiRef: gitlabAuthApiRef,
    });
  }

  if (configuredProviders.has('bitbucket')) {
    providerList.push({
      id: 'bitbucket',
      title: 'Bitbucket',
      message: 'Sign in using Bitbucket',
      apiRef: bitbucketAuthApiRef,
    });
  }

  if (configuredProviders.has('microsoft')) {
    providerList.push({
      id: 'microsoft',
      title: 'Microsoft',
      message: 'Sign in using Microsoft',
      apiRef: microsoftAuthApiRef,
    });
  }
  if (configuredProviders.has('okta')) {
    providerList.push({
      id: 'okta',
      title: 'Okta',
      message: 'Sign in using Okta',
      apiRef: oktaAuthApiRef,
    });
  }
  if (configuredProviders.has('onelogin')) {
    providerList.push({
      id: 'onelogin',
      title: 'OneLogin',
      message: 'Sign in using OneLogin',
      apiRef: oneloginAuthApiRef,
    });
  }
  return providerList;
};
