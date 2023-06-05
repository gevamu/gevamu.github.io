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
        url: 'https://github.com/gevamu', // Custom URL
        customIcon: undefined, // Icon name from https://icones.js.org/
        disabled: false // Hide social media link
      },
      // Other social media links have the same structure
      facebook: {
        url: undefined, // Custom URL
        customIcon: undefined, // Icon name from https://icones.js.org/
        disabled: true
      },
      twitter: {
        url: undefined, // Custom URL
        customIcon: undefined, // Icon name from https://icones.js.org/
        disabled: true
      },
      linkedin: {
        url: undefined, // Custom URL
        customIcon: undefined, // Icon name from https://icones.js.org/
        disabled: true
      },
      youtube: {
        url: undefined, // Custom URL
        customIcon: undefined, // Icon name from https://icones.js.org/
        disabled: true

        // TODO: remove this workaround when problem with types in docs-toolkit is resolved
      }
    }
  }
})
