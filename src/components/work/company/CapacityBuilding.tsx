import React, {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../constants";
import ChartSection from "../../ChartSection";
import CapacityBuildingAllowed from "./CapacityBuildingAllowed";
import WhoPaysForCapacityBuilding from "./WhoPaysForCapacityBuilding";

export default function CapacityBuilding() {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div id="capacity-building" className="mt-5 mb-3">
                        <h5 className="mb-3">Capacity Building</h5>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12 col-lg-6">
                    <CapacityBuildingAllowed />
                </div>
                <div className="col-12 col-lg-6">
                    <WhoPaysForCapacityBuilding />
                </div>
            </div>
        </>
    )
}