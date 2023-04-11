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

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@exactpro/docs-web-toolkit/tailwind.config')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#286455',
          50: '#D1EDE6',
          100: '#C3E7DE',
          200: '#A6DBCE',
          300: '#88D0BE',
          400: '#6BC4AE',
          500: '#4EB89E',
          600: '#3F9E87',
          700: '#34816E',
          800: '#286455',
          900: '#183C33'
        }
      }
    }
  }
}
