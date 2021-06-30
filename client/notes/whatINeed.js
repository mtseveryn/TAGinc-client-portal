const user = {
  _id: '',
  name: '',
  isCompanyAdmin: 'boolean',
  company: '',
  companySubscription: '',
  devices: [
    // -> Specific to the user
    {
      deviceType: '',
      deviceName: '',
      deviceDescription: '',
      deviceServices: [
        {
          serviceId: '',
          serviceName: '',
          serviceDescription: '',
        },
      ],
    },
  ],
  baseServices: [
    // -> Specific to the user
    {
      serviceId: '',
      serviceName: '',
      serviceDescription: '',
    },
  ],
  tickets: [
    // -> Specific to the user
    {
      ticketid: '',
      ticketStatus: '', // open, pending, closed
      ticketType: '',
      ticketDetails: {
        // list of key values pairs based on the ticketType
      },
      ticketComments: [''],
    },
  ],
};

const admin = {
  _id: '',
  companies: [
    // -> all in the database
    { id: company._id, name: company.name },
  ],
  services: [
    // -> all in the database
    {
      serviceTypeId: '',
      serviceTypeName: '', //  i.e. => Install hardware/base service/cloud services
      subServices: [], // for example ['Office 365', 'Azure', 'Virtual Server/Desktop']
    },
  ],
  tickets: [
    // -> all in the database
    {
      ticketid,
      ticketType,
      companyId,
      userId,
      ticketStatus: '', // -> open, closed, pending
      ticketDetails: {
        // list of key values pairs based on the ticketType
      },
    },
  ],
};
