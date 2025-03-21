import React from "react";
import { VitalMeasurementTable } from "@/components/vital-measurement-table";
import { VitalMeasurement } from "@/types/vital-measurement";
import { Section } from "@/components/section";
import { PartialVitalReport } from "@/types/partial-vital-report";
import { VitalReportTable } from "@/components/vital-report-table";
import { SectionHeader } from "@/components/section-header";

const VitalsPage = () => {
  const measurements: VitalMeasurement[] = [
    {
      "id": "299b219c-f5ba-49a1-8214-8dc6fa46bf93",
      "type": "Body Temperature",
      "unit": "°C",
      "value": "20",
      "recordedAt": "2025-02-09T11:35:21.266256Z"
    },
    {
      "id": "32312ec1-c358-42cf-87ea-0f11eed510c3",
      "type": "Oxygen Saturation",
      "unit": "% (SpO2)",
      "value": "13",
      "recordedAt": "2025-02-09T11:35:21.268781Z"
    },
    {
      "id": "76a2d27e-03ae-4db6-8127-80bb53292782",
      "type": "Respiratory Rate",
      "unit": "breaths/min",
      "value": "57",
      "recordedAt": "2025-02-09T11:35:21.268345Z"
    },
    {
      "id": "b7f864b9-0b32-427d-bd9a-acde1200cac0",
      "type": "Blood Pressure",
      "unit": "mmHg",
      "value": "22",
      "recordedAt": "2025-02-09T11:35:21.268598Z"
    }
  ];

  const reports: PartialVitalReport[] = [
    {
      "id": "e42b4fe3-9436-4562-ab37-6e4db3c3d3cf",
      "notes": "The patient is sweating heavily, with stomach ace.with stomach ace",
      "recordedAt": "2025-02-08T22:08:25.659533",
      "member": {
        "id": "3909e5f4-38d9-47b7-b9fc-0e534aa01739",
        "firstName": "Pierre",
        "lastName": "Martin"
      }
      , vitalCount: 4
    }
  ];

  return (
    <Section>
      <SectionHeader title="Vitals" />
      <VitalMeasurementTable measurements={measurements} />
        <span className="block  mt-8 mb-2">Record history</span>
      <VitalReportTable reports={reports} />
    </Section>
  );
};

export default VitalsPage;