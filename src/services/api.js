const BASE_URL = 'http://localhost:5000';

export const requestService = {
  getAll: () => fetch(`${BASE_URL}/requests`).then(res => res.json()),
  create: (data) => fetch(`${BASE_URL}/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(res => res.json()),
  updateStatus: (id, status) => fetch(`${BASE_URL}/requests/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  }).then(res => res.json()),
  delete: (id) => fetch(`${BASE_URL}/requests/${id}`, { method: 'DELETE' })
};