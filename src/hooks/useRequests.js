import { useState, useEffect, useCallback } from 'react';
import { requestService } from '../services/api';

export const useRequests = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await requestService.getAll();
      setData(result);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => { refreshData(); }, [refreshData]);

  return { data, isLoading, refreshData };
};

// Na by the way ,,,This architecture of ours follows the D.R.Y (Don't Repeat Yourself) principle perfectly by reusing the useRequests hook across both student and admin views.
