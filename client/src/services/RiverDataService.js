import http from "../http-common";

class RiverDataService {
  getAll() {
    return http.get("/api/flowReadings/latest");
  }

  getLatestTideTimes(location) {
    return http.get("/api/tides/" + location + "/latest");
  }

 /*  get(id) {
    return http.get(`/river/${id}`);
  }

  create(data) {
    return http.post("/river", data);
  }

  update(id, data) {
    return http.put(`/river/${id}`, data);
  } */

}

export default new RiverDataService();