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
        },
        accent: {
          DEFAULT: '#53B57F',
          50: '#D3ECDF',
          100: '#C5E6D4',
          200: '#A9DABF',
          300: '#8CCEA9',
          400: '#70C194',
          500: '#53B57F',
          600: '#3F9164',
          700: '#2E6A49',
          800: '#1D432E',
          900: '#0C1C13'
        },
        secondary: {
          DEFAULT: '#112A4D',
          50: '#C6D9F2',
          100: '#B6CDEF',
          200: '#94B7E7',
          300: '#73A0E0',
          400: '#518AD9',
          500: '#3073D1',
          600: '#2761B1',
          700: '#204E90',
          800: '#183C6E',
          900: '#112A4D',
          950: '#0C1D36'
        }
      }
    }
  }
}
