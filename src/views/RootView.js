import { ROUTES } from '../comon'
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from '../layout/AppLayout'

export default function RootView() {

    return (
        <AppLayout>
            <Routes>
                {Object.values(ROUTES).map((route, idx) => {
                    return (
                        // <Route key={idx + route.ID} path={route.PATH} element={<AppLayout><route.COMPONENT /></AppLayout>} />
                        <Route key={idx + route.ID} path={route.PATH} element={<route.COMPONENT />} />
                    )
                })}
                <Route path="*" element={<Navigate to={ROUTES.DEVICE_STATUS.PATH} replace />} />
            </Routes>
        </AppLayout>
    )
}