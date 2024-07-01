import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import React from "react";
import { getToursDetailById } from "@/hooks/apis/tour";
import Exception from "@/components/ExceptionPage/Exception";

export async function getServerSideProps({ params }) {
    const { id } = params;
    // const { code, message, data } = tourDescriptionFake || {};
    const dataCallRegionInfo = {
        id: params.id
    }

    let check = false;
    let responseTourInfo = await getToursDetailById(dataCallRegionInfo);
    if (responseTourInfo != undefined && responseTourInfo.code == 200) {
        check = true;
    } else {
        responseTourInfo = 1;
    }

    return {
        props: {
            tourDetail: responseTourInfo,
            id: params.id,
            check: check
        },
    };
}

const TourDetailsById = ({tourDetail,id,check}) => {
    console.log(tourDetail);
    if (check == true) {
        return (
            <Layout pageTitle="Tours Details">
                <MainSliderTwo />
                <TourDetailsPage tourDetail={tourDetail.data} />
            </Layout>
        );
    } else {
        return (
            <Layout pageTitle="Tours">
                <Exception />
            </Layout>
        );
    }
};

export default TourDetailsById;
