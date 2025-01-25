const app = Vue.createApp({
    data() {
        return {
            service: 'Service Name',
            company: 'Company Name',
            prompt : '',
            header : {
                intro: [
                    'The Importance of [Service] ____',
                    'Why [Service] is Essential in ____',
                    'The Importance of Regular [Service] ____',
                    'Professional Expertise for [Service] ____'
                ],
                cause: [
                    'Signs You Need [Service] ____',
                    'Common Problems Requiring [Service] ____',
                    'The Risks of Neglecting [Service] ____',
                    'Benefits of Professional [Service] ____',
                ],
                procedure: [
                    'Our [Service] Process in ____',
                    'Comprehensive [Service] ____',
                    'Routine Maintenance for [Service] ____',
                    'Types of [Service] ____',
                    'How to Identify [Service] Issues in ____',
                    'Preventive Measures for [Service] ____'
                ],
                specialize: [
                    'Residential [Service] ____',
                    'Commercial [Service] ____',
                    'Custom [Service] ____',
                    'Specialized [Service] ____',
                    'Trusted Experts in [Service] ____'
                ],
                misc: [
                    'Protect Your Home with Expert [Service] ____',
                    'The Dangers of DIY [Service] ____',
                    'Modern [Service] Techniques in ____'
                ],
                cost: [
                    'Cost of [Service] ____',
                    'Affordable [Service] Costs in ____',
                    '[Service] Cost in ____',
                    '[Service] Near Me in ____'
                ],
                reason: [
                    'Why Choose [Company] for [Service] ____?',
                    'Finding the Right [Service] Service in ____',
                ],
                schedule: [
                    'How Often Should You Schedule [Service] ____',
                    'Schedule [Service] ____ Today',
                    'Schedule Your [Service] ____ Today',
                    'Contact Us for Reliable [Service] ____',
                    'Contact [Company] Today for [Service]'
                ]
            },
            reference: ''
        }
    },

    computed: {
        // service slug
        serviceSlug() {
            return this.service.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
        },

        // reference url
        referenceURL() {
            let url = '';
            const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*(\?[^\s]*)?$/i;
            if (pattern.test(this.reference)) {
                url = this.reference;
            }
            return url;
        }
    },

    watch: {

    },

    methods: {
        /**
         * @method pick
         * @param {Array} input
         * @param {number} n
         * @return Array
         */
        pick(input, n) {
            const length = input.length;
            if (n > length) {
                n = length;
            }

            // shuffle using the Fisher-Yates algorithm
            const shuffled = [...input];
            for (let i = length - 1; i > 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
            }

            // return the first n elements
            return shuffled.slice(0, n);
        },

        /**
         * @method generatePrompt
         */
        generatePrompt() {
            if(this.service.trim() === '' || this.company.trim() === '') {
                alert('Service and Company are required.');
                location.reload();
            }
            else {
                const headers = [];

                // intro
                headers.push(...this.pick(this.header.intro, 1));

                // cause
                headers.push(...this.pick(this.header.cause, 2));

                // procedure
                headers.push(...this.pick(this.header.procedure, 2));

                // specialize
                headers.push(...this.pick(this.header.specialize, 2));

                // misc
                headers.push(...this.pick(this.header.misc, 2));

                // cost
                headers.push(...this.pick(this.header.cost, 1));

                // reason
                headers.push(...this.pick(this.header.reason, 1));

                // schedule
                headers.push(...this.pick(this.header.schedule, 1));

                // generate prompt
                let headerStr = '';
                for (let i = 0; i < headers.length; i++) {
                    headerStr += headers[i] + "\n\n";
                }
                this.prompt = ``;
                if(this.referenceURL !== '') {
                    this.prompt += `First, please read the content of this website: "${this.referenceURL}". `;
                }
                this.prompt += `I'm creating an article${(this.referenceURL !== '' ? (', similar to the article in that website, ') : ' ')}with 1100 words or more for our website, [Company], to promote our home services. `;
                this.prompt += `At least 15% of the article contains paragraphs with bullet points. `;
                this.prompt += `This article will focus on [Service] and is written as if we are speaking directly to our customers. `;
                this.prompt += `At the beginning, start with two paragraphs with no header: the first paragraph is composed of 2 sentences summary that promotes the service, the second paragraph is a supporting introduction for the article. `;
                this.prompt += `Then, please generate a comprehensive and engaging article with 1100 words or more, organized under the following headers:\n\n${headerStr}`;
                this.prompt += `Do not remove the ____ because I will be the one to replace it with a place; You can reword the header but keep it "[Service] ____" whenever it's mentioned. `;
                this.prompt += `Also, as much as possible mention "[Service]" as the service and "____" as the place enough times within the paragraphs. `;
                this.prompt += `In the very last part, include a sentence mentioning [[email]] and [[phone]] placeholders.`

                // parse prompt
                this.prompt = this.prompt.replaceAll('[Service]', this.service);
                this.prompt = this.prompt.replaceAll('[service]', this.service);
                this.prompt = this.prompt.replaceAll('[Company]', this.company);
                this.prompt = this.prompt.replaceAll('[company]', this.company);
                this.prompt = this.prompt.trim();

                // store data
                this.storeData();
            }
        },

        /**
         * @method storeData
         */
        storeData() {
            localStorage.setItem('service'  , this.service);
            localStorage.setItem('company'  , this.company);
            localStorage.setItem('prompt'   , this.prompt);
            localStorage.setItem('reference', this.reference);
        },

        /**
         * @method retrieveData
         */
        retrieveData() {
            const storedService = localStorage.getItem('service');
            if (storedService) {
                this.service = storedService;
            }

            const storedCompany = localStorage.getItem('company');
            if (storedCompany) {
                this.company = storedCompany;
            }

            const storedPrompt = localStorage.getItem('prompt');
            if (storedPrompt) {
                this.prompt = storedPrompt;
            }

            const storedReference = localStorage.getItem('reference');
            if (storedReference) {
                this.reference = storedReference;
            }
        }
    },

    created() {

    },

    mounted() {
        this.$nextTick(() => {
            // retrieve data
            this.retrieveData();
        });
    }
});

app.mount('#app');