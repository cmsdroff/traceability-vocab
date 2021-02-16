const fs = require('fs');
const path = require('path');
const issuer = require('../services/issuer');

it('can issue / verify AgInspectionReport', async () => {
  const { verified, verifiableCredential } = await issuer.issue({
    credentialSubject: {
      id: 'did:example:123',
      type: 'AgInspectionReport',
      facility: {
        type: 'Place',
        globalLocationNumber: '4435107821535',
        geo: {
          type: 'GeoCoordinates',
          latitude: '-7.6211',
          longitude: '-0.2775',
        },
        address: {
          type: 'PostalAddress',
          organizationName: 'Considine Inc',
          streetAddress: '964 Pearline Court',
          addressLocality: 'Reubenberg',
          addressRegion: 'Florida',
          postalCode: '95784',
          addressCountry: 'Taiwan',
        },
      },
      inspector: {
        type: 'Inspector',
        person: {
          type: 'Person',
          firstName: 'Lisandro',
          lastName: 'Friesen',
          email: 'Efren82@example.net',
          phoneNumber: '555-870-5768',
          worksFor: {
            type: 'Organization',
            name: 'Tromp and Sons',
            description: 'Intuitive holistic open architecture',
            address: {
              type: 'PostalAddress',
              streetAddress: '376 Borer Estates',
              addressLocality: 'West Jorge',
              addressRegion: 'South Dakota',
              postalCode: '05211-4662',
              addressCountry: 'Antigua and Barbuda',
            },
            email: 'Richie.Walker@example.org',
            phoneNumber: '555-546-8068',
          },
          jobTitle: 'Dynamic Security Administrator',
        },
        qualification: [
          {
            type: 'Qualification',
            qualificationCategory: 'Customer Infrastructure Developer',
            qualificationValue: 'Administrator',
          },
        ],
      },
      shipment: {
        type: 'ParcelDelivery',
        deliveryAddress: {
          type: 'PostalAddress',
          organizationName: 'Ryan, Gleichner and Labadie',
          streetAddress: '60852 Vesta Park',
          addressLocality: 'West Lawrenceshire',
          addressRegion: 'Nevada',
          postalCode: '29312',
          addressCountry: 'Bosnia and Herzegovina',
        },
        originAddress: {
          type: 'PostalAddress',
          organizationName: 'Vandervort, Schmitt and Legros',
          streetAddress: '9022 Keely Station',
          addressLocality: 'East Trentonberg',
          addressRegion: 'Idaho',
          postalCode: '07038',
          addressCountry: 'Bulgaria',
        },
        deliveryMethod: 'Rail freight transport',
        trackingNumber: '950265759390',
      },
      applicant: {
        type: 'Organization',
        name: 'Heathcote - Gutkowski',
        description: 'Proactive even-keeled capability',
        address: {
          type: 'PostalAddress',
          streetAddress: '2194 Langworth Shore',
          addressLocality: 'Lake Cortneyland',
          addressRegion: 'South Dakota',
          postalCode: '44196',
          addressCountry: 'Poland',
        },
        email: 'Jarrod48@example.org',
        phoneNumber: '555-951-7047',
      },
      inspectionDate: '2020-03-15',
      inspectionType: 'General',
      observation: [
        {
          type: 'Observation',
          property: {
            type: 'MechanicalProperty',
            identifier: 'ISO 180',
            name: 'Izod Impact Strength Test',
            description: 'ISO 180 defines the method used for pendulums to determine the impact resistance of a plastic specimen when supported in a cantilever configuration. Test results are used to evaluate the resilience of materials, typically plastics.',
          },
          measurement: {
            type: 'MeasuredValue',
            value: '47.964',
            unitCode: 'B13',
          },
        },
        {
          type: 'Observation',
          property: {
            type: 'MechanicalProperty',
            identifier: 'ISO 1352',
            name: 'Torque-controlled fatigue testing',
            description: 'ISO 1352:2011 specifies the conditions for performing torsional, constant-amplitude, nominally elastic stress fatigue tests on metallic specimens without deliberately introducing stress concentrations. The tests are carried out at ambient temperature (ideally at between 10 °C and 35 °C) in air by applying a pure couple to the specimen about its longitudinal axis.',
          },
          measurement: {
            type: 'MeasuredValue',
            value: '00.00',
            unitCode: 'UNKNOWN',
          },
        },
      ],
    },
  }, [
    'https://www.w3.org/2018/credentials/v1',
    'https://w3id.org/traceability/v1',
  ]);
  expect(verified).toBe(true);
  fs.writeFileSync(path.resolve(__dirname, '../../../docs/credentials/AgInspectionReport.json'), JSON.stringify(verifiableCredential, null, 2));
});
