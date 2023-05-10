class PersonDataViewModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public workPosition: string,
        public email: string,
        public birthDate: Date,
        public phone: string,
    ) {}
}

export default PersonDataViewModel;