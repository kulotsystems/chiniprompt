const app = Vue.createApp({
    data() {
        return {
            service: 'Service Name',
            company: 'Company Name',
            prompt : '',
            header : {
                intro: [
                    'The Importance of [Service] ____',
                    'Why [Service] ____ is Essential',
                    'The Importance of Regular [Service] ____',
                    'Professional Expertise for [Service] ____',
                    'How [Service] ____ Can Enhance Your Home',
                    'Why You Need [Service] ____ for Your Home',
                    'The Value of [Service] ____',
                    'How [Service] ____ Contributes to a Healthier Home',
                    'The Role of [Service] ____ in Home Maintenance',
                    'The Impact of [Service] ____ on Your Home\'s Longevity',
                    'Why [Service] ____ Is Critical for Homeowners',
                    'How [Service] ____ Can Save You Time and Money',
                    'Ensuring Quality with [Service] ____',
                    'The Benefits of [Service] ____ for Your Home and Family',
                    'Why Choosing Professional [Service] ____ is Vital'
                ],
                cause: [
                    'Signs You Need [Service] ____',
                    'Common Problems Requiring [Service] ____',
                    'The Risks of Neglecting [Service] ____',
                    'Benefits of Professional [Service] ____',
                    'Warning Signs You Need [Service] ____ for Your Home',
                    'When It\'s Time for [Service] ____',
                    'How to Know If You Need [Service] ____',
                    'Top Indicators That You Need [Service] ____',
                    'The Consequences of Delaying [Service] ____',
                    'How to Spot Issues That Need [Service] ____ in Your Home',
                    'Signs That Your Home Requires [Service] ____ Immediately',
                    'Identifying When You Need [Service] ____',
                    'What Happens When You Skip [Service] ____',
                    'Understanding the Warning Signs for [Service] ____',
                    'How to Recognize the Need for [Service] ____ in Your Home'
                ],
                procedure: [
                    'Our [Service] Process in ____',
                    'Comprehensive [Service] ____',
                    'Routine Maintenance for [Service] ____',
                    'Types of [Service] ____',
                    'How to Identify [Service] Issues in ____',
                    'Preventive Measures for [Service] ____',
                    'Step-by-Step [Service] ____ Procedure',
                    'How We Handle [Service] ____',
                    'Understanding the [Service] ____ Process',
                    'What to Expect During [Service] ____',
                    'How We Approach [Service] ____ for Your Home',
                    'The Process Behind Efficient [Service] ____',
                    'Detailed Procedure for [Service] ____',
                    'The Essential Steps in [Service] ____',
                    'A Complete Guide to [Service] ____ Procedures'
                ],
                specialize: [
                    'Residential [Service] ____',
                    'Commercial [Service] ____',
                    'Custom [Service] ____',
                    'Specialized [Service] ____',
                    'Trusted Experts in [Service] ____',
                    'Expert [Service] ____ for Homes',
                    'Tailored [Service] ____ for Your Needs',
                    'Premium [Service] ____ for Residential and Commercial',
                    'Industry-Leading [Service] ____',
                    'Top Specialists in [Service] ____',
                    'Personalized [Service] ____ Solutions',
                    'Comprehensive [Service] ____ for Every Home',
                    'High-Quality [Service] ____ for Your Home',
                    'Certified Professionals for [Service] ____',
                    'Advanced [Service] ____ for Modern Homes',
                ],
                misc: [
                    'Protect Your Home with Expert [Service] ____',
                    'The Dangers of DIY [Service] ____',
                    'Modern [Service] Techniques in ____',
                    'Why DIY [Service] ____ Can Be Risky for Your Home',
                    'How Professional [Service] ____ Ensures Your Safety',
                    'The Latest Trends in [Service] ____',
                    'Why You Should Trust Experts for [Service] ____',
                    'The Advantages of Professional [Service] ____ Over DIY',
                    'Protect Your Investment with [Service] ____',
                    'Why [Service] ____ Is Vital for Homeowners',
                    'How [Service] ____ Enhances Home Security and Efficiency',
                    'The Science Behind Modern [Service] ____ Methods',
                    'Why [Service] ____ Is an Investment for Your Home',
                    'Innovative [Service] ____ Solutions for Modern Homes',
                    'Ensuring Quality and Safety with [Service] ____'
                ],
                cost: [
                    'Cost of [Service] ____',
                    'Affordable [Service] Costs in ____',
                    '[Service] Cost in ____',
                    '[Service] Near Me in ____',
                    'How Much Does [Service] ____ Cost?',
                    'Budget-Friendly [Service] ____',
                    'Understanding the Cost of [Service] ____',
                    'What to Expect in Terms of [Service] ____ Costs',
                    'Affordable Pricing for [Service] ____',
                    'The Average [Service] ____ Cost',
                    'How to Get the Best [Service] ____ Deal?',
                    'Is [Service] ____ Worth the Cost?',
                    'Breaking Down the Costs of [Service] ____',
                    'Transparent Pricing for [Service] ____',
                    'Competitive Pricing for [Service] ____ Near You'
                ],
                reason: [
                    'Why Choose [Company] for [Service] ____?',
                    'Finding the Right [Service] Service in ____',
                    'Why [Company] Is the Best Choice for [Service] ____',
                    'Top Reasons to Choose [Company] for [Service] ____',
                    'What Makes [Company] Stand Out for [Service] ____',
                    'Why [Company] Is Trusted for [Service] ____',
                    'Choosing [Company] for Expert [Service] ____',
                    'Why [Company] Is the Leading Provider of [Service] ____',
                    'How [Company] Delivers Exceptional [Service] ____',
                    'What Sets [Company] Apart for [Service] ____',
                    'Why [Company] Offers the Best [Service] ____ Solutions',
                    'The Advantages of Choosing [Company] for [Service] ____',
                    'Why [Company] Is Your Go-To for [Service] ____',
                    'Why [Company] Offers Unmatched Expertise in [Service] ____',
                    'Experience the Difference with [Company] for [Service] ____'
                ],
                schedule: [
                    'How Often Should You Schedule [Service] ____',
                    'Schedule [Service] ____ Today',
                    'Schedule Your [Service] ____ Today',
                    'Contact Us for Reliable [Service] ____',
                    'Contact [Company] Today for [Service] ____',
                    'Reach Out to [Company] for Professional [Service] ____',
                    'Book Your [Service] ____ Appointment Now',
                    'Get [Service] ____ Scheduled with [Company] Today',
                    'Don\'t Wait - Schedule Your [Service] ____ Now',
                    'Book [Service] ____ with [Company] Today',
                    'Set Up Your [Service] ____ Appointment Today',
                    'Contact Us Now to Schedule [Service] ____',
                    'Need [Service] ____? Schedule an Appointment Today',
                    'Schedule Your [Service] ____ with Experts Today',
                    'Get Your [Service] ____ Scheduled Right Away'
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
                    this.prompt += `First, please read the content of this website: "${this.referenceURL}". You don't have to copy the article in that website, just determine its context. `;
                }
                this.prompt += `I'm creating an article${(this.referenceURL !== '' ? (', similar to the article in that website, ') : ' ')}with 1100 words or more for our website, [Company], to promote our home services like [Service]. `;
                this.prompt += `Do not mention phrases like "In this article, " anymore. `;
                this.prompt += `Minimize the use of bullet points but include bullet points when necessary. `;
                this.prompt += `This article will focus on [Service] and is written as if we are speaking directly to our customers. `;
                this.prompt += `At the beginning, start with two paragraphs with no header: the first paragraph is composed of 2 sentences summary that promotes the service and makes mention of "____" placeholder as the place and our company "[Company]", the second paragraph is a supporting introduction for the article. `;
                this.prompt += `Then, please generate a comprehensive and engaging article with 1100 words or more, organized under the following headers:\n\n${headerStr}`;
                this.prompt += `Do not remove the ____ because I will be the one to replace it with a place; You can reword the header but keep it "[Service] ____" whenever it's mentioned. `;
                this.prompt += `Also, as much as possible mention "[Service]" as the service and "____" as the place or "[Service] ____" as combined enough times within the paragraphs for better SEO purposes. `;
                this.prompt += `Include a sentence anywhere once or twice mentioning [[contact-us-link]] which we will replace by the text "contact us" and [[phone]] placeholder which we will replace by our phone number link. `;
                this.prompt += `Remember that this article will be published in our own website, so there's no need to mention "visit our website" anymore.`;

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