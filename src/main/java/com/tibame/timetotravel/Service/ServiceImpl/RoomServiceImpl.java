package com.tibame.timetotravel.service.ServiceImpl;

import com.tibame.timetotravel.common.PageBean;
import com.tibame.timetotravel.entity.Room;
import com.tibame.timetotravel.repository.RoomRepository;
import com.tibame.timetotravel.service.RoomService;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("roomService")
public class RoomServiceImpl implements RoomService {
    @Autowired
    @Qualifier("roomRepository")
    private RoomRepository roomRepository;
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public void insert(Room room) {
        roomRepository.save(room);
    }
    @Override
    @Transactional
    public void deleteById(Integer roomId) {
        roomRepository.deleteById(roomId);
    }

    @Override
    @Transactional
    public void update(Integer roomId, Room room) {
        entityManager.merge(room);
    }

    public Room findById(Integer roomId) {
        return roomRepository.findById(roomId).orElse(null);
    }

    public List<Room> findAll() {
        return roomRepository.findAll();
    }
}
