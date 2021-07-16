import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import CapacityBuildingAllowed from "./CapacityBuildingAllowed";
import WhoPaysForCapacityBuilding from "./WhoPaysForCapacityBuilding";
import DevOpsPersonnel from "./DevOpsPersonnel";
import DevOpsImportance from "./DevOpsImportance";

export default function DevOps() {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div id="devops" className="mt-5 mb-3">
                        <h5 className="mb-3">Dev Ops</h5>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12 col-lg-6">
                    <DevOpsPersonnel />
                </div>
                <div className="col-12 col-lg-6">
                    <DevOpsImportance />
                </div>
            </div>
        </>
    )
}