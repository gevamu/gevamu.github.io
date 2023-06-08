/*
 * Copyright 2023 Exactpro (Exactpro Systems Limited)
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

export default defineAppConfig({
  exactproDocs: {
    title: 'Gevamu',
    social: {
      githhub: {
        url: 'https://github.com/gevamu',
        // TODO: remove this workaround when problem with types in docs-toolkit is resolved
        customIcon: undefined,
        disabled: false
      },
      facebook: {
        url: undefined,
        customIcon: undefined,
        disabled: true
      },
      twitter: {
        url: undefined,
        customIcon: undefined,
        disabled: true
      },
      linkedin: {
        url: undefined,
        customIcon: undefined,
        disabled: true
      },
      youtube: {
        url: undefined,
        customIcon: undefined,
        disabled: true
      }
    },
    gtag: {
      measurementId: 'G-X8PF05EJ19'
    },
    seo: {
      verificationMetaTags: [
        // <meta name="google-site-verification" content="PYzR06VK4UIZvGdBkMh_TkqOu83QxapFJknyAR58yJA" />
        {
          name: 'google-site-verification',
          content: 'PYzR06VK4UIZvGdBkMh_TkqOu83QxapFJknyAR58yJA'
        }
      ]
    }
  }
})
