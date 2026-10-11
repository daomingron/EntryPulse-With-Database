/* ========================================================================= */
    /* 1. BENCHMARK DATASET (From PDF 2: 16 Concerts across Metro Manila/Bulacan)*/
    /* ========================================================================= */
    const CONCERT_DATASET = [
      {
        id: "TS-ERAS",
        artist: "Taylor Swift",
        event: "The Eras Tour (Custom)",
        category: "International",
        venue: "Philippine Stadium (Bulacan)",
        capacity: "20,000",
        date: "Dec 12, 2026 • 8:00 PM",
        vip: "₱50,000",
        lower: "₱18,500 – ₱28,000",
        upper: "₱6,500 – ₱12,000",
        vipPriceNum: 50000,
        lowerPriceNum: 22000,
        upperPriceNum: 6500,
        featured: true
      },
      {
        id: "BTS-WT",
        artist: "BTS",
        event: "World Tour",
        category: "International",
        venue: "Philippine Arena (Bulacan)",
        capacity: "55,000",
        date: "Jan 18, 2027 • 7:30 PM",
        vip: "₱25,000",
        lower: "₱13,500 – ₱20,000",
        upper: "₱7,500",
        vipPriceNum: 25000,
        lowerPriceNum: 16000,
        upperPriceNum: 7500
      },
      {
        id: "BM-MNL",
        artist: "Bruno Mars",
        event: "Live in Manila",
        category: "International",
        venue: "Philippine Arena (Bulacan)",
        capacity: "55,000",
        date: "Nov 20, 2026 • 8:00 PM",
        vip: "₱23,850",
        lower: "₱13,750 – ₱18,750",
        upper: "₱2,750 – ₱7,250",
        vipPriceNum: 23850,
        lowerPriceNum: 15000,
        upperPriceNum: 5000
      },
      {
        id: "TW-AH",
        artist: "The Weeknd",
        event: "After Hours Tour (Custom)",
        category: "International",
        venue: "Philippine Arena (Bulacan)",
        capacity: "55,000",
        date: "Feb 14, 2027 • 8:00 PM",
        vip: "₱50,000",
        lower: "₱15,000 – ₱22,000",
        upper: "₱5,500 – ₱9,000",
        vipPriceNum: 50000,
        lowerPriceNum: 18000,
        upperPriceNum: 7000
      },
      {
        id: "WL-WD",
        artist: "Westlife",
        event: "The Wild Dreams Tour",
        category: "International",
        venue: "SM Mall of Asia Arena",
        capacity: "15,000",
        date: "Oct 25, 2026 • 8:00 PM",
        vip: "₱18,000",
        lower: "₱12,000 – ₱15,000",
        upper: "₱3,500 – ₱6,000",
        vipPriceNum: 18000,
        lowerPriceNum: 13500,
        upperPriceNum: 4500
      },
      {
        id: "BSB-DNA",
        artist: "Backstreet Boys",
        event: "DNA World Tour",
        category: "International",
        venue: "SM Mall of Asia Arena",
        capacity: "15,000",
        date: "Nov 08, 2026 • 8:00 PM",
        vip: "₱18,350",
        lower: "₱12,500 – ₱15,500",
        upper: "₱3,800 – ₱6,500",
        vipPriceNum: 18350,
        lowerPriceNum: 14000,
        upperPriceNum: 5000
      },
      {
        id: "F4-MG",
        artist: "F4 (Meteor Garden)",
        event: "Reunion Concert (Custom)",
        category: "International",
        venue: "SM Mall of Asia Arena",
        capacity: "15,000",
        date: "Dec 05, 2026 • 7:00 PM",
        vip: "₱50,000",
        lower: "₱16,000 – ₱25,000",
        upper: "₱4,000 – ₱8,500",
        vipPriceNum: 50000,
        lowerPriceNum: 20000,
        upperPriceNum: 6000
      },
      {
        id: "EN-FATE",
        artist: "ENHYPEN",
        event: "FATE World Tour",
        category: "International",
        venue: "New Clark City Stadium / MOA",
        capacity: "20,000",
        date: "Dec 18, 2026 • 7:00 PM",
        vip: "₱17,000",
        lower: "₱11,500 – ₱14,000",
        upper: "₱5,500 – ₱7,500",
        vipPriceNum: 17000,
        lowerPriceNum: 12500,
        upperPriceNum: 6500
      },
      {
        id: "BP-BP",
        artist: "BLACKPINK",
        event: "BORN PINK World Tour",
        category: "International",
        venue: "Philippine Arena (Bulacan)",
        capacity: "55,000",
        date: "Jan 30, 2027 • 7:00 PM",
        vip: "₱19,400",
        lower: "₱13,600 – ₱15,600",
        upper: "₱3,000 – ₱9,000",
        vipPriceNum: 19400,
        lowerPriceNum: 14500,
        upperPriceNum: 6000
      },
      {
        id: "BINI-GB",
        artist: "BINI",
        event: "Grand BINIverse",
        category: "P-Pop & OPM",
        venue: "Smart Araneta Coliseum",
        capacity: "16,500",
        date: "Oct 15, 2026 • 7:00 PM",
        vip: "₱11,195",
        lower: "₱5,230 – ₱9,499",
        upper: "₱1,387 – ₱2,658",
        vipPriceNum: 11195,
        lowerPriceNum: 7000,
        upperPriceNum: 2000,
        featured: true
      },
      {
        id: "SB19-PAG",
        artist: "SB19",
        event: "Pagtatag / Simula at Wakas",
        category: "P-Pop & OPM",
        venue: "Smart Araneta Coliseum",
        capacity: "16,500",
        date: "Nov 12, 2026 • 7:00 PM",
        vip: "₱15,000",
        lower: "₱4,750 – ₱10,500",
        upper: "₱1,000 – ₱3,500",
        vipPriceNum: 15000,
        lowerPriceNum: 8000,
        upperPriceNum: 2500
      },
      {
        id: "KAIA-CS",
        artist: "KAIA",
        event: "P-Pop Concert Series",
        category: "P-Pop & OPM",
        venue: "Music Museum (Greenhills)",
        capacity: "700",
        date: "Oct 28, 2026 • 8:00 PM",
        vip: "₱5,500",
        lower: "₱3,200 – ₱4,000",
        upper: "₱1,200 – ₱2,000",
        vipPriceNum: 5500,
        lowerPriceNum: 3500,
        upperPriceNum: 1500
      },
      {
        id: "BD-PPOP",
        artist: "Babydolls",
        event: "P-Pop Showcase",
        category: "P-Pop & OPM",
        venue: "Skydome, SM North EDSA",
        capacity: "1,500",
        date: "Nov 02, 2026 • 6:00 PM",
        vip: "₱4,500",
        lower: "₱2,500 – ₱3,500",
        upper: "₱1,000 – ₱1,800",
        vipPriceNum: 4500,
        lowerPriceNum: 3000,
        upperPriceNum: 1200
      },
      {
        id: "RD-SOLO",
        artist: "Rob Deniel",
        event: "Solo Live Concert",
        category: "P-Pop & OPM",
        venue: "New Frontier Theater",
        capacity: "2,385",
        date: "Dec 01, 2026 • 8:00 PM",
        vip: "₱6,000",
        lower: "₱3,500 – ₱4,500",
        upper: "₱1,500 – ₱2,500",
        vipPriceNum: 6000,
        lowerPriceNum: 4000,
        upperPriceNum: 2000
      },
      {
        id: "JMC-XMAS",
        artist: "Jose Mari Chan",
        event: "Christmas Special Live",
        category: "P-Pop & OPM",
        venue: "Newport Performing Arts Theater",
        capacity: "1,710",
        date: "Dec 24, 2026 • 7:00 PM",
        vip: "₱8,500",
        lower: "₱5,000 – ₱6,500",
        upper: "₱1,800 – ₱3,000",
        vipPriceNum: 8500,
        lowerPriceNum: 5500,
        upperPriceNum: 2200
      },
      {
        id: "YC-BB",
        artist: "Yeng Constantino",
        event: "Biyaheng Bente",
        category: "P-Pop & OPM",
        venue: "Smart Araneta Coliseum",
        capacity: "16,500",
        date: "Jan 15, 2027 • 8:00 PM",
        vip: "₱8,600",
        lower: "₱4,300 – ₱7,000",
        upper: "₱2,700 – ₱3,200",
        vipPriceNum: 8600,
        lowerPriceNum: 5000,
        upperPriceNum: 2900
      }
    ];

    /* ========================================================================= */
    /* 2. STATE MANAGEMENT & PESSIMISTIC LOCKING ENGINE                          */
    /* ========================================================================= */
    let currentSessionId = "USR-8921-PH";
    let activeEvent = CONCERT_DATASET[0]; // Default: Taylor Swift Eras Tour
    let selectedSeat = null;              // Currently locked seat
    let holdLockTimeLeft = 0;             // In seconds (10 mins = 600)
    let holdLockInterval = null;
    let isOnlineMode = true;

    // Step-by-step gating state (Events → SeatLock 360 → GatePass)
    let hasChosenEvent = false;          // True once user picks an event in Event Catalog
    let hasConfirmedPayment = false;     // True once payment is committed in SeatLock 360

    // Relational Inventory State (Mock In-Memory DB)
    const SEAT_SECTIONS = [
      { id: "VIP-A", name: "VIP A", tier: "VIP", defaultPrice: 50000, rows: 2, cols: 6 },
      { id: "VIP-B", name: "VIP B", tier: "VIP", defaultPrice: 50000, rows: 2, cols: 6 },
      { id: "LB-1",  name: "Lower Box 1", tier: "Lower", defaultPrice: 22000, rows: 2, cols: 6 },
      { id: "LB-2",  name: "Lower Box 2", tier: "Lower", defaultPrice: 18500, rows: 2, cols: 6 },
      { id: "UB",    name: "Upper Box", tier: "Upper", defaultPrice: 10000, rows: 2, cols: 6 },
      { id: "GA",    name: "Gen Ad", tier: "Upper", defaultPrice: 6500, rows: 2, cols: 6 }
    ];

    let inventoryDB = []; // Flat array of seat rows
    let turnstileLogs = [];

    // Order & Refund Records (Mock Relational Ledger)
    let ordersDB = [];      // Confirmed ticket purchases
    let refundsDB = [];     // Refund requests (linked to orders)
    let pendingRefundOrder = null; // Order awaiting confirmation in the refund dialog

    /* ========================================================================= */
    /* QUEUE WAITING ROOM STATE MANAGEMENT                                      */
    /* ========================================================================= */
    // Queue State - Can be swapped for backend API calls to /api/queue/status
    const QUEUE_CONFIG = {
      queueDurationSeconds: 180,   // Three-minute waiting room countdown
      autoTickInterval: 3000,      // Admin auto-advance every 3 seconds
      positionsPerTick: 1,         // How many positions to advance per tick
      admissionPosition: 1,        // When position reaches this, user is admitted
      initialPosition: 50,         // Starting position for demo
      totalTickets: 72,            // Total ticket inventory
      ticketsSold: 42              // Initial tickets sold for demo
    };

    let queueState = {
      inQueue: false,
      position: 0,
      isAdmitted: false,
      eventName: '',
      pollingInterval: null,
      autoTickEnabled: false,
      remainingSeconds: QUEUE_CONFIG.queueDurationSeconds,
      autoTickElapsed: 0
    };

    // Initialize queue with event data
    function initQueueForEvent(event) {
      queueState.inQueue = true;
      queueState.isAdmitted = false;
      queueState.eventName = event ? `${event.artist} - ${event.event}` : activeEvent.artist + ' - ' + activeEvent.event;
      queueState.position = QUEUE_CONFIG.initialPosition;
      queueState.remainingSeconds = QUEUE_CONFIG.queueDurationSeconds;
      queueState.autoTickElapsed = 0;

      // Reset UI
      document.getElementById('queueEventName').textContent = queueState.eventName;
      document.getElementById('queueAdmittedContent').style.display = 'none';
      document.getElementById('queueAdminControls').style.display = '';

      updateQueueUI();
      startQueuePolling();

      logSql(`<span class="sql-keyword">-- USER JOINED QUEUE:</span> Position ${queueState.position} for ${queueState.eventName}`);
    }

    // Update all queue UI elements
    function updateQueueUI() {
      // Position
      const positionEl = document.getElementById('queuePosition');
      positionEl.textContent = '#' + queueState.position.toLocaleString();

      const waitTimeEl = document.getElementById('queueWaitTime');
      if (queueState.isAdmitted) {
        waitTimeEl.textContent = 'ADMITTED';
        waitTimeEl.style.color = '#059669';
      } else {
        const minutes = Math.floor(queueState.remainingSeconds / 60);
        const seconds = queueState.remainingSeconds % 60;
        waitTimeEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        waitTimeEl.style.color = '';
      }

      // Progress bar follows elapsed time across the full three-minute queue.
      const elapsedSeconds = QUEUE_CONFIG.queueDurationSeconds - queueState.remainingSeconds;
      const progress = Math.max(0, Math.min(100, (elapsedSeconds / QUEUE_CONFIG.queueDurationSeconds) * 100));
      document.getElementById('queueProgressPercent').textContent = Math.round(progress) + '%';
      document.getElementById('queueProgressFill').style.width = progress + '%';

      // Stats
      document.getElementById('queueTotalAhead').textContent = Math.max(0, queueState.position - 1).toLocaleString();
      document.getElementById('queueTotalInLine').textContent = (QUEUE_CONFIG.initialPosition).toLocaleString();
      document.getElementById('queueTicketsLeft').textContent = (QUEUE_CONFIG.totalTickets - QUEUE_CONFIG.ticketsSold).toLocaleString();

      // Status badge
      const statusBadge = document.getElementById('queueStatusBadge');
      const statusText = document.getElementById('queueStatusText');
      if (queueState.isAdmitted) {
        statusBadge.className = 'queue-status-badge admitted';
        statusBadge.innerHTML = '<i class="fa-solid fa-check-circle"></i><span>Admitted!</span>';
        document.getElementById('queuePollingText').textContent = 'Redirecting to SeatLock 360...';
      } else {
        statusBadge.className = 'queue-status-badge waiting';
        statusBadge.innerHTML = '<i class="fa-solid fa-hourglass-half"></i><span>Waiting in Queue</span>';
        document.getElementById('queuePollingText').textContent = 'Checking line status...';
      }
    }

    // Start polling for queue updates (simulated)
    function startQueuePolling() {
      // Clear any existing interval
      if (queueState.pollingInterval) {
        clearInterval(queueState.pollingInterval);
      }

      // Update the three-minute waiting-room clock once per second.
      queueState.pollingInterval = setInterval(() => {
        if (queueState.isAdmitted || !queueState.inQueue) return;

        queueState.remainingSeconds = Math.max(0, queueState.remainingSeconds - 1);
        queueState.autoTickElapsed += 1000;
        updateQueueUI();

        if (queueState.autoTickEnabled && queueState.autoTickElapsed >= QUEUE_CONFIG.autoTickInterval) {
          queueState.autoTickElapsed = 0;
          queueAdvancePosition(QUEUE_CONFIG.positionsPerTick);
        }

        if (queueState.remainingSeconds === 0) {
          queueAdmitUser();
        }
      }, 1000);
    }

    // Stop polling
    function stopQueuePolling() {
      if (queueState.pollingInterval) {
        clearInterval(queueState.pollingInterval);
        queueState.pollingInterval = null;
      }
    }

    // Advance queue position (simulated movement)
    function queueAdvancePosition(count = 1) {
      if (queueState.isAdmitted || !queueState.inQueue) return;

      queueState.position = Math.max(QUEUE_CONFIG.admissionPosition, queueState.position - count);
      updateQueueUI();

      // Log SQL representation
      logSql(`<span class="sql-keyword">-- QUEUE UPDATE:</span> Position advanced to ${queueState.position}`);

      // Check if admitted
      if (queueState.position <= QUEUE_CONFIG.admissionPosition) {
        queueAdmitUser();
      }
    }

    // Simulate a single tick (for manual testing)
    function queueSimulateTick() {
      queueState.autoTickEnabled = !queueState.autoTickEnabled;
      const btn = event.target.closest('button');
      if (queueState.autoTickEnabled) {
        btn.innerHTML = '<i class="fa-solid fa-pause"></i> Stop Auto-Tick';
        btn.classList.add('success');
        notify('Auto-tick enabled: Queue will advance every 3 seconds', 'info');
      } else {
        btn.innerHTML = '<i class="fa-solid fa-play"></i> Auto-Tick';
        btn.classList.remove('success');
        notify('Auto-tick disabled', 'info');
      }
    }

    // Force admit user (admin/developer override)
    function queueForceAdmit() {
      queueState.position = 1;
      queueAdmitUser();
      notify('User force-admitted to SeatLock 360', 'success');
      logSql(`<span class="sql-keyword">-- QUEUE FORCE ADMIT:</span> Developer override - User admitted`);
    }

    // Admit user to SeatLock
    function queueAdmitUser() {
      queueState.isAdmitted = true;
      queueState.autoTickEnabled = false;
      stopQueuePolling();

      // Show admitted content
      document.getElementById('queueAdmittedContent').style.display = 'block';
      document.getElementById('queueAdminControls').style.display = 'none';

      // Hide other queue elements
      document.querySelector('.queue-position-display').style.display = 'none';
      document.querySelector('.queue-estimated-time').style.display = 'none';
      document.querySelector('.queue-progress-section').style.display = 'none';
      document.querySelector('.queue-stats-row').style.display = 'none';

      updateQueueUI();

      logSql(`<span class="sql-keyword">-- QUEUE ADMITTED:</span> User promoted to SeatLock 360`);
    }

    // Proceed to SeatLock after being admitted
    function proceedToSeatLock() {
      stopQueuePolling();
      // Mark that user has an event selected (required to access seatlock)
      hasChosenEvent = true;
      updateProgressLocks();
      switchView('seatlock');
      notify('Welcome to SeatLock 360! Select your seats.', 'success');
    }

    // Reset queue (for testing)
    function queueReset() {
      queueState.position = QUEUE_CONFIG.initialPosition;
      queueState.isAdmitted = false;
      queueState.autoTickEnabled = false;
      queueState.remainingSeconds = QUEUE_CONFIG.queueDurationSeconds;
      queueState.autoTickElapsed = 0;

      // Reset UI visibility
      document.getElementById('queueAdmittedContent').style.display = 'none';
      document.getElementById('queueAdminControls').style.display = '';
      document.querySelector('.queue-position-display').style.display = '';
      document.querySelector('.queue-estimated-time').style.display = '';
      document.querySelector('.queue-progress-section').style.display = '';
      document.querySelector('.queue-stats-row').style.display = '';

      // Reset auto-tick button if it was enabled
      const autoTickBtn = document.querySelector('button[onclick="queueSimulateTick()"]');
      if (autoTickBtn) {
        autoTickBtn.innerHTML = '<i class="fa-solid fa-play"></i> Auto-Tick';
        autoTickBtn.classList.remove('success');
      }

      updateQueueUI();
      startQueuePolling();

      notify('Queue reset to initial position', 'info');
      logSql(`<span class="sql-keyword">-- QUEUE RESET:</span> Position reset to ${QUEUE_CONFIG.initialPosition}`);
    }

    // API-ready queue status fetcher (for backend integration)
    // Replace this mock with actual fetch('/api/queue/status') call
    async function fetchQueueStatus() {
      // Mock implementation - returns current queue state
      // In production: const response = await fetch('/api/queue/status');
      //                const data = await response.json();
      //                return data;

      return {
        position: queueState.position,
        estimatedWait: Math.ceil(queueState.remainingSeconds / 60),
        estimatedWaitSeconds: queueState.remainingSeconds,
        isAdmitted: queueState.isAdmitted,
        ticketsRemaining: QUEUE_CONFIG.totalTickets - QUEUE_CONFIG.ticketsSold
      };
    }

    // Check if user needs to join queue (entry point logic)
    function checkQueueRequired() {
      // For demo: Always show queue before seatlock
      // In production: Check if event has high demand / queue is active
      return true; // Always require queue for this demo
    }

    // Initialize Database
    function initDatabase() {
      inventoryDB = [];
      SEAT_SECTIONS.forEach(sec => {
        let count = 1;

        // Determine price based on section tier and active event pricing
        let seatPrice = sec.defaultPrice; // fallback
        if (activeEvent) {
          if (sec.tier === "VIP") {
            seatPrice = activeEvent.vipPriceNum;
          } else if (sec.tier === "Lower") {
            // LB-1 gets full lower price, LB-2 gets 85% of lower price
            if (sec.id === "LB-1") {
              seatPrice = activeEvent.lowerPriceNum;
            } else if (sec.id === "LB-2") {
              seatPrice = Math.round(activeEvent.lowerPriceNum * 0.85);
            }
          } else if (sec.tier === "Upper") {
            // UB gets 150% of upper price, GA gets full upper price
            if (sec.id === "UB") {
              seatPrice = Math.round(activeEvent.upperPriceNum * 1.5);
            } else {
              seatPrice = activeEvent.upperPriceNum;
            }
          }
        }

        for (let r = 1; r <= sec.rows; r++) {
          for (let c = 1; c <= sec.cols; c++) {
            let status = "AVAILABLE";
            let lockedBy = null;
            let expiresAt = null;

            // Seed sample data matching PDF interface
            // PDF has VIP A: RED (SOLD), VIP B: YELLOW (SELECTED/HELD), LB 2: RED (SOLD)
            if (sec.id === "VIP-A" && (c <= 4)) {
              status = "SOLD";
              lockedBy = "USR-4011-SYS";
            } else if (sec.id === "LB-2" && (c % 2 === 0)) {
              status = "SOLD";
              lockedBy = "USR-2918-EXT";
            }

            inventoryDB.push({
              seat_id: `${sec.id}-R${r}-S${c}`,
              event_id: activeEvent.id,
              section_id: sec.id,
              section_name: sec.name,
              row_num: r,
              seat_num: c,
              seat_label: `${sec.name} - Row ${r}, Seat ${c}`,
              base_price: seatPrice,  // Use calculated event-specific price
              status: status,
              locked_by: lockedBy,
              expires_at: expiresAt
            });
            count++;
          }
        }
      });
      renderSeats();
      updateDbViewer();
    }

    /* ========================================================================= */
    /* 3. VIEW ROUTING & INITIALIZATION                                         */
    /* ========================================================================= */
    function switchView(viewName) {
      // Guard: only admins can access the admin console
      if (viewName === 'admin' && (!currentUser || ACCOUNTS[currentUser].role !== 'admin')) {
        notify('Access denied. Admin privileges required.', 'error');
        return;
      }

      // Guard: SQL Inspector is developer tooling — admins only
      if (viewName === 'inspector' && (!currentUser || ACCOUNTS[currentUser].role !== 'admin')) {
        notify('Access denied. SQL Inspector requires admin privileges.', 'error');
        return;
      }

      // Step-gated consumer views — SeatLock needs an event, GatePass needs a paid ticket
      if (viewName === 'seatlock' && !hasChosenEvent) {
        notify('SeatLock 360 is locked — Step 1: choose an event in Event Catalog first.', 'warning');
        return;
      }
      if (viewName === 'gatepass' && !(hasChosenEvent && hasConfirmedPayment)) {
        notify(
          hasChosenEvent
            ? 'GatePass is locked — Step 2: confirm your payment in SeatLock 360 first.'
            : 'GatePass is locked — Step 1: choose an event in Event Catalog first.',
          'warning'
        );
        return;
      }

      document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

      const target = document.getElementById(`view-${viewName}`);
      if (target) target.classList.add('active');

      // Update Nav active style - find button by onclick attribute for accuracy
      const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(
        b => b.getAttribute('onclick') === `switchView('${viewName}')`
      );
      if (activeBtn) activeBtn.classList.add('active');

      // View-specific initialization and cleanup
      if (viewName === 'inspector') updateDbViewer();
      if (viewName === 'gatepass') updateQrCode();
      if (viewName === 'admin') renderAdminConsole();

      // Queue view: start polling when entering
      if (viewName === 'queue') {
        if (queueState.inQueue && !queueState.isAdmitted) {
          startQueuePolling();
        }
      } else {
        // Cleanup: stop queue polling when leaving queue view
        if (queueState.pollingInterval) {
          stopQueuePolling();
        }
      }
    }

    /* --- Universal Back Navigation --- */
    function backToEvents() {
      switchView('events');
    }
    function backToSeatLock() {
      // Step gating still applies — a paid ticket unlocks GatePass but never locks SeatLock back down
      if (!hasChosenEvent) {
        notify('No event selected. Returning to Events & Benchmark.', 'warning');
        switchView('events');
        return;
      }
      switchView('seatlock');
    }

    /* --- Step-by-step gating controller (Events → SeatLock 360 → GatePass) --- */
    function setNavLock(tabName, unlocked, tip) {
      const btn = Array.from(document.querySelectorAll('.nav-btn')).find(
        b => b.getAttribute('onclick') === `switchView('${tabName}')`
      );
      if (!btn) return;
      btn.classList.toggle('locked', !unlocked);
      if (unlocked) {
        btn.removeAttribute('title');
        btn.removeAttribute('aria-disabled');
      } else {
        btn.title = tip;
        btn.setAttribute('aria-disabled', 'true');
      }
    }

    function updateProgressLocks() {
      const s1Done = hasChosenEvent;
      const s2Done = hasConfirmedPayment;

      const seatLockUnlocked = s1Done;
      const gatePassUnlocked = s1Done && s2Done;

      const eventTip = 'Step 1: Choose an event in "Events & Benchmark" to unlock SeatLock 360 & GatePass.';
      const gateTip  = s1Done
        ? 'Step 2: Confirm your payment in SeatLock 360 to unlock GatePass.'
        : eventTip;

      setNavLock('seatlock', seatLockUnlocked, eventTip);
      setNavLock('gatepass', gatePassUnlocked, gateTip);

      // Workflow stepper visual state
      const stepEls = [
        { id: 'wfStep1', done: s1Done, active: !s1Done, icon: 'fa-calendar-days' },
        { id: 'wfStep2', done: s2Done, active: s1Done && !s2Done, icon: 'fa-chair' },
        { id: 'wfStep3', done: s2Done, active: false, icon: 'fa-qrcode' }
      ];
      stepEls.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        el.classList.toggle('wf-done', s.done);
        el.classList.toggle('wf-active', s.active);
        el.classList.toggle('wf-locked', !s.done && !s.active);
        const dot = el.querySelector('.wf-dot i');
        if (dot) dot.className = 'fa-solid ' + (s.done ? 'fa-check' : (s.active ? s.icon : 'fa-lock'));
      });

      const conns = [
        { id: 'wfConn1', filled: s1Done },
        { id: 'wfConn2', filled: s2Done }
      ];
      conns.forEach(c => { const el = document.getElementById(c.id); if (el) el.classList.toggle('wf-filled', c.filled); });

      // Hide the stepper in the admin shell (consumer tabs are hidden there anyway)
      const stepper = document.getElementById('workflowStepper');
      if (stepper) stepper.style.display = (currentUser && ACCOUNTS[currentUser] && ACCOUNTS[currentUser].role === 'admin') ? 'none' : '';
    }

    function resetStepProgress() {
      hasChosenEvent = false;
      hasConfirmedPayment = false;
      updateProgressLocks();
    }

    function renderEvents(category = "ALL") {
      const grid = document.getElementById('eventsGrid');
      grid.innerHTML = '';

      const filtered = category === "ALL" ? CONCERT_DATASET : CONCERT_DATASET.filter(e => e.category === category);

      filtered.forEach(ev => {
        const card = document.createElement('div');
        card.className = `event-card ${ev.featured ? 'featured' : ''}`;
        const catClass = ev.category === 'International' ? 'cat-intl' : 'cat-opm';

        card.innerHTML = `
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="event-badge-cat ${catClass}">
                <i class="fa-solid fa-tag"></i> ${ev.category}
              </span>
              <span style="font-size: 0.72rem; color: var(--text-dim); font-family: var(--font-mono);">
                <i class="fa-solid fa-users"></i> ${ev.capacity}
              </span>
            </div>
            <div class="event-artist">${ev.artist}</div>
            <div class="event-tour">${ev.event}</div>

            <div class="event-meta">
              <div class="event-meta-item">
                <i class="fa-solid fa-location-dot"></i> <span>${ev.venue}</span>
              </div>
              <div class="event-meta-item">
                <i class="fa-solid fa-calendar-day"></i> <span>${ev.date}</span>
              </div>
            </div>

            <div class="tier-pricing-box">
              <div class="tier-row">
                <span class="tier-name">VIP / SVIP Tier</span>
                <span class="tier-price" style="color: #B45309;">${ev.vip}</span>
              </div>
              <div class="tier-row">
                <span class="tier-name">Lower Box / Patron</span>
                <span class="tier-price" style="color: #2563EB;">${ev.lower}</span>
              </div>
              <div class="tier-row">
                <span class="tier-name">Upper Box / Gen Ad</span>
                <span class="tier-price" style="color: #34D399;">${ev.upper}</span>
              </div>
            </div>
          </div>

          <button class="btn-select-event" onclick="selectEventForSeatLock('${ev.id}')">
            <i class="fa-solid fa-chair"></i> Select & Launch SeatLock 360
          </button>
        `;
        grid.appendChild(card);
      });
    }

    function filterCategory(cat) {
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.includes(cat) || (cat === 'ALL' && btn.textContent.includes('All')));
      });
      renderEvents(cat);
    }

    function selectEventForSeatLock(eventId) {
      const ev = CONCERT_DATASET.find(e => e.id === eventId);
      if (!ev) return;
      activeEvent = ev;

      // Step 1 complete: an event was chosen → unlocks SeatLock 360 (GatePass still needs a paid ticket)
      hasChosenEvent = true;
      hasConfirmedPayment = false;   // a new event always needs a fresh, confirmed payment
      updateProgressLocks();

      // Update UI labels
      document.getElementById('stadiumEventTitle').textContent = `${ev.event.toUpperCase()} - ${ev.artist.toUpperCase()}`;
      document.getElementById('stadiumEventSubtitle').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${ev.venue} &nbsp;|&nbsp; <i class="fa-solid fa-calendar"></i> ${ev.date}`;
      document.getElementById('stadiumCapacityBadge').textContent = `Capacity: ${ev.capacity}`;
      document.getElementById('activeEventNameBadge').textContent = `${ev.artist} - ${ev.event}`;

      // Update Section Prices
      document.getElementById('price-VIP-A').textContent = `₱${ev.vipPriceNum.toLocaleString()}`;
      document.getElementById('price-VIP-B').textContent = `₱${ev.vipPriceNum.toLocaleString()}`;
      document.getElementById('price-LB-1').textContent = `₱${ev.lowerPriceNum.toLocaleString()}`;
      document.getElementById('price-LB-2').textContent = `₱${Math.round(ev.lowerPriceNum * 0.85).toLocaleString()}`;
      document.getElementById('price-UB').textContent = `₱${Math.round(ev.upperPriceNum * 1.5).toLocaleString()}`;
      document.getElementById('price-GA').textContent = `₱${ev.upperPriceNum.toLocaleString()}`;

      // Reset Active Seat selection and re-init inventory
      releaseCurrentHold();
      initDatabase();

      // NEW: Check if queue is required for this event
      if (checkQueueRequired()) {
        // Enter queue first
        initQueueForEvent(ev);
        switchView('queue');
        notify(`Joining queue for ${ev.artist}...`, 'info');
      } else {
        // Direct access to SeatLock (legacy flow)
        switchView('seatlock');
        notify(`Loaded ${ev.artist} SeatLock 360 Stadium Map`, 'success');
      }

      logSql(`-- Switched Event Context to ${ev.id}`);
      logSql(`SET SESSION event_context = '${ev.id}';`);
    }

    /* ========================================================================= */
    /* 4. SEAT RENDERING & PESSIMISTIC LOCKING CONTROLLER                        */
    /* ========================================================================= */
    function renderSeats() {
      SEAT_SECTIONS.forEach(sec => {
        const grid = document.getElementById(`grid-${sec.id}`);
        if (!grid) return;
        grid.innerHTML = '';

        const secSeats = inventoryDB.filter(s => s.section_id === sec.id);
        secSeats.forEach(seat => {
          const btn = document.createElement('div');
          let statusClass = 'available';
          let statusIcon = '';

          if (seat.status === 'SOLD') {
            statusClass = 'sold';
            statusIcon = '🔴';
          } else if (seat.status === 'HELD') {
            if (seat.locked_by === currentSessionId) {
              statusClass = 'selected';
              statusIcon = '🟡';
            } else {
              statusClass = 'held';
              statusIcon = '🟡';
            }
          }

          btn.className = `seat-node ${statusClass}`;
          btn.title = `${seat.seat_label} [Status: ${seat.status}]`;
          btn.textContent = `S${seat.seat_num}`;

          btn.onclick = () => handleSeatClick(seat);
          grid.appendChild(btn);
        });
      });
    }

    function handleSeatClick(seat) {
      if (seat.status === 'SOLD') {
        notify(`Seat ${seat.seat_label} has already been sold!`, 'error');
        return;
      }

      if (seat.status === 'HELD' && seat.locked_by !== currentSessionId) {
        notify(`Pessimistic Lock Conflict! Seat currently held by ${seat.locked_by}`, 'warning');
        logSql(`<span class="sql-keyword">ERROR 409:</span> Row-level lock rejected. Row ${seat.seat_id} is LOCKED by session '${seat.locked_by}'.`);
        return;
      }

      // If user clicked their own currently held seat, release it
      if (selectedSeat && selectedSeat.seat_id === seat.seat_id) {
        releaseCurrentHold();
        return;
      }

      // Acquire Pessimistic Row Lock (10-minute hold)
      acquirePessimisticLock(seat);
    }

    function acquirePessimisticLock(seat) {
      // Release previous hold if any
      if (selectedSeat) {
        const prev = inventoryDB.find(s => s.seat_id === selectedSeat.seat_id);
        if (prev && prev.status === 'HELD') {
          prev.status = 'AVAILABLE';
          prev.locked_by = null;
          prev.expires_at = null;
        }
      }

      // Lock new seat
      seat.status = 'HELD';
      seat.locked_by = currentSessionId;
      seat.expires_at = new Date(Date.now() + 10 * 60 * 1000);
      selectedSeat = seat;

      // Start 10-minute hold countdown
      startHoldTimer(600); // 600 seconds = 10 mins

      // Show seat details and payment sections
      document.getElementById('noSeatSelectedMessage').style.display = 'none';
      document.getElementById('seatDetailsContent').style.display = 'block';
      document.getElementById('paymentMethodSection').style.display = 'block';
      document.getElementById('confirmPaySection').style.display = 'block';

      // Update Checkout Panel with seat-specific data
      document.getElementById('detailEvent').textContent = activeEvent.artist;
      document.getElementById('detailVenue').textContent = activeEvent.venue;
      document.getElementById('detailSection').textContent = seat.seat_label;
      document.getElementById('detailLockStatus').textContent = "HELD (10-Min Lease Active)";
      document.getElementById('detailPrice').textContent = `₱${seat.base_price.toLocaleString()}.00`;
      document.getElementById('btnPayText').textContent = `CONFIRM & PAY ₱${seat.base_price.toLocaleString()}.00`;
      // Keep button disabled - only unlock when payment method validation passes (Open App for GCash/Maya, or card details filled)
      document.getElementById('btnConfirmPay').disabled = true;
      // Clear any previous payment authorization when selecting a new seat
      if (awaitingPaymentFor === 'seatlock') {
        awaitingPaymentFor = null;
      }

      renderSeats();
      updateDbViewer();
      notify(`Pessimistic Lock Acquired for ${seat.seat_label}! (Hold: 10:00 mins)`, 'success');

      // SQL Log representation
      logSql(`<span class="sql-keyword">BEGIN TRANSACTION</span>;`);
      logSql(`<span class="sql-keyword">SELECT</span> * <span class="sql-keyword">FROM</span> <span class="sql-table">seats_inventory</span> <span class="sql-keyword">WHERE</span> seat_id = '<span class="sql-func">${seat.seat_id}</span>' <span class="sql-keyword">FOR UPDATE</span>;`);
      logSql(`<span class="sql-keyword">UPDATE</span> <span class="sql-table">seats_inventory</span> <span class="sql-keyword">SET</span> status = '<span class="sql-func">HELD</span>', locked_by = '<span class="sql-func">${currentSessionId}</span>', lock_expiry = NOW() + INTERVAL 10 MINUTE <span class="sql-keyword">WHERE</span> seat_id = '${seat.seat_id}';`);
    }

    function releaseCurrentHold() {
      if (selectedSeat) {
        const seat = inventoryDB.find(s => s.seat_id === selectedSeat.seat_id);
        if (seat && seat.status === 'HELD' && seat.locked_by === currentSessionId) {
          seat.status = 'AVAILABLE';
          seat.locked_by = null;
          seat.expires_at = null;
        }
        selectedSeat = null;
      }
      clearInterval(holdLockInterval);
      holdLockTimeLeft = 0;
      updateTimerUI(0);
      document.getElementById('globalHoldLockBanner').classList.add('inactive');
      document.getElementById('globalHoldLockText').textContent = "HOLD LOCK: 00:00 (NO ACTIVE LEASE)";
      document.getElementById('btnConfirmPay').disabled = true;

      // Hide seat details and payment sections when no seat is selected
      document.getElementById('noSeatSelectedMessage').style.display = '';
      document.getElementById('seatDetailsContent').style.display = 'none';
      document.getElementById('paymentMethodSection').style.display = 'none';
      document.getElementById('confirmPaySection').style.display = 'none';
      document.getElementById('detailLockStatus').textContent = "NONE";
      document.getElementById('detailEvent').textContent = "—";
      document.getElementById('detailVenue').textContent = "—";
      document.getElementById('detailSection').textContent = "—";
      document.getElementById('detailPrice').textContent = "—";
      document.getElementById('btnPayText').textContent = "CONFIRM & PAY";

      renderSeats();
      updateDbViewer();
      logSql(`<span class="sql-keyword">ROLLBACK</span>; <span class="sql-comment">-- Lock lease released back to inventory pool</span>`);
    }

    function startHoldTimer(seconds) {
      clearInterval(holdLockInterval);
      holdLockTimeLeft = seconds;
      document.getElementById('globalHoldLockBanner').classList.remove('inactive');

      updateTimerUI(holdLockTimeLeft);

      holdLockInterval = setInterval(() => {
        holdLockTimeLeft--;
        updateTimerUI(holdLockTimeLeft);

        if (holdLockTimeLeft <= 0) {
          clearInterval(holdLockInterval);
          notify('Pessimistic Hold Expired! Seat has been returned to pool.', 'warning');
          releaseCurrentHold();
        }
      }, 1000);
    }

    function updateTimerUI(sec) {
      const m = Math.floor(sec / 60).toString().padStart(2, '0');
      const s = (sec % 60).toString().padStart(2, '0');
      const str = `${m}:${s} MINS`;

      document.getElementById('checkoutTimer').textContent = `${m}:${s}`;
      if (sec > 0) {
        document.getElementById('globalHoldLockText').textContent = `HOLD LOCK: ${str}`;
      }
    }

    /* ========================================================================= */
    /* 5. CONCURRENCY & STRESS SIMULATION                                       */
    /* ========================================================================= */
    function simulateConcurrentLockConflict() {
      if (!selectedSeat) {
        notify('Please select a seat first to simulate a concurrency conflict!', 'info');
        return;
      }
      notify(`Concurrent user USR-9942 tried to acquire lock on ${selectedSeat.seat_id} → 409 Conflict Rejected!`, 'error');
      logSql(`<span class="sql-keyword">-- CONCURRENT ACCESS ATTEMPT BY SESSION 'USR-9942':</span>`);
      logSql(`<span class="sql-keyword">SELECT</span> * <span class="sql-keyword">FROM</span> <span class="sql-table">seats_inventory</span> <span class="sql-keyword">WHERE</span> seat_id = '${selectedSeat.seat_id}' <span class="sql-keyword">FOR UPDATE NOWAIT</span>;`);
      logSql(`<span class="sql-keyword">ERROR 55P03:</span> lock_not_available (Row is held by '${currentSessionId}' until ${selectedSeat.expires_at ? selectedSeat.expires_at.toLocaleTimeString() : 'N/A'})`);
    }

    function forceExpireLock() {
      if (!selectedSeat) return;
      holdLockTimeLeft = 1;
      notify('Simulating automatic TTL lease expiration...', 'warning');
    }

    function simulateTrafficBurst() {
      let lockedCount = 0;
      inventoryDB.forEach(s => {
        if (s.status === 'AVAILABLE' && Math.random() > 0.4 && (!selectedSeat || s.seat_id !== selectedSeat.seat_id)) {
          s.status = Math.random() > 0.5 ? 'HELD' : 'SOLD';
          s.locked_by = `USR-SIM-${Math.floor(Math.random() * 9000 + 1000)}`;
          lockedCount++;
        }
      });
      renderSeats();
      updateDbViewer();
      notify(`Simulated traffic burst: ${lockedCount} seats locked by concurrent buyers!`, 'warning');
      logSql(`<span class="sql-comment">-- High concurrency burst: ${lockedCount} pessimistic row locks engaged simultaneously</span>`);
    }

    function resetSeats() {
      releaseCurrentHold();
      initDatabase();
      notify('Stadium seat inventory reset to default benchmark.', 'info');
    }

    /* ========================================================================= */
    /* 6. PAYMENT TRANSACTION & GATEPASS GENERATION                             */
    /* ========================================================================= */
    function selectPaymentMethod(method, cardElem) {
      document.querySelectorAll('.payment-radio-card').forEach(c => c.classList.remove('active'));
      cardElem.classList.add('active');

      // Show/hide appropriate payment details
      const gcashLink = document.getElementById('gcashLink');
      const mayaLink = document.getElementById('mayaLink');
      const cardDetails = document.getElementById('cardDetails');

      if (gcashLink) gcashLink.style.display = method === 'GCash' ? 'block' : 'none';
      if (mayaLink) mayaLink.style.display = method === 'Maya' ? 'block' : 'none';
      if (cardDetails) cardDetails.style.display = method === 'Card' ? 'block' : 'none';

      // Lock payment button for ALL payment methods initially
      const payBtn = document.getElementById('btnConfirmPay');
      if (payBtn) {
        if (method === 'Card') {
          // For Card: lock until all card fields are filled
          payBtn.disabled = true;
          validateCardInputs();
        } else {
          // For GCash/Maya: lock button - user must use popup to unlock
          payBtn.disabled = true;
          // Clear any previous payment authorization when switching methods
          if (awaitingPaymentFor === 'seatlock') {
            awaitingPaymentFor = null;
          }
        }
      }

      logSql(`<span class="sql-comment">-- Selected Payment Provider: ${method}</span>`);
    }

    /* ========================================================================= */
    /* 6A. MOCK PAYMENT GATEWAY FUNCTIONS (GCash & Maya)                        */
    /* ========================================================================= */
    function openGcashMock() {
      const amount = selectedSeat ? selectedSeat.base_price : 50000;
      const orderId = 'ORD-' + Date.now().toString(36).toUpperCase();
      awaitingPaymentFor = 'seatlock'; // Mark that SeatLock is waiting for payment
      window.open(`gcash-mock.html?amount=${amount}&ref=${orderId}`, 'gcashPayment', 'width=480,height=800,resizable=yes');
    }

    function openMayaMock() {
      const amount = selectedSeat ? selectedSeat.base_price : 50000;
      const orderId = 'ORD-' + Date.now().toString(36).toUpperCase();
      awaitingPaymentFor = 'seatlock'; // Mark that SeatLock is waiting for payment
      window.open(`maya-mock.html?amount=${amount}&ref=${orderId}`, 'mayaPayment', 'width=480,height=800,resizable=yes');
    }

    /* ========================================================================= */
    /* 6B. CARD INPUT AUTO-FORMATTING & VALIDATION                               */
    /* ========================================================================= */
    // Card Number Formatting (Add spaces every 4 digits)
    function formatCardNumber(input) {
      let value = input.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
      let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
      input.value = formatted.slice(0, 19); // Max 16 digits + 3 spaces
      validateCardInputs();
    }

    // Expiry Date Formatting (MM/YY)
    function formatExpiryDate(input) {
      let value = input.value.replace(/[^0-9]/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      input.value = value;
      validateCardInputs();
    }

    // CVV Validation (3-4 digits)
    function formatCVV(input) {
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 4);
      validateCardInputs();
    }

    // Validate all card inputs and enable/disable pay button
    function validateCardInputs() {
      const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
      const expiry = document.getElementById('cardExpiry').value;
      const cvv = document.getElementById('cardCVV').value;
      const name = document.getElementById('cardName').value.trim();

      const isValid = cardNumber.length === 16 &&
                      expiry.length === 5 && expiry.includes('/') &&
                      cvv.length >= 3 &&
                      name.length > 0;

      const payBtn = document.getElementById('btnConfirmPay');
      if (payBtn) {
        // Only update if card payment is selected
        const cardDetails = document.getElementById('cardDetails');
        if (cardDetails && cardDetails.style.display !== 'none') {
          payBtn.disabled = !isValid;
        }
      }
    }

    // FlexiPass Card Formatting
    function formatFlexiCardNumber(input) {
      let value = input.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
      let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
      input.value = formatted.slice(0, 19);
      validateFlexiCardInputs();
    }

    function formatFlexiExpiryDate(input) {
      let value = input.value.replace(/[^0-9]/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      input.value = value;
      validateFlexiCardInputs();
    }

    function formatFlexiCVV(input) {
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 4);
      validateFlexiCardInputs();
    }

    function validateFlexiCardInputs() {
      const cardNumber = document.getElementById('flexiCardNumber').value.replace(/\s/g, '');
      const expiry = document.getElementById('flexiCardExpiry').value;
      const cvv = document.getElementById('flexiCardCVV').value;
      const name = document.getElementById('flexiCardName').value.trim();

      const isValid = cardNumber.length === 16 &&
                      expiry.length === 5 && expiry.includes('/') &&
                      cvv.length >= 3 &&
                      name.length > 0;

      const payBtn = document.getElementById('btnFlexiPay');
      if (payBtn) {
        const cardDetails = document.getElementById('flexiCardDetails');
        if (cardDetails && cardDetails.style.display !== 'none') {
          payBtn.disabled = !isValid;
        }
      }
    }

    // Attach event listeners on page load
    window.addEventListener('DOMContentLoaded', () => {
      // SeatLock 360 card inputs
      const cardNumber = document.getElementById('cardNumber');
      const cardExpiry = document.getElementById('cardExpiry');
      const cardCVV = document.getElementById('cardCVV');
      const cardName = document.getElementById('cardName');

      if (cardNumber) cardNumber.addEventListener('input', () => formatCardNumber(cardNumber));
      if (cardExpiry) cardExpiry.addEventListener('input', () => formatExpiryDate(cardExpiry));
      if (cardCVV) cardCVV.addEventListener('input', () => formatCVV(cardCVV));
      if (cardName) cardName.addEventListener('input', validateCardInputs);

      // FlexiPass card inputs
      const flexiCardNumber = document.getElementById('flexiCardNumber');
      const flexiCardExpiry = document.getElementById('flexiCardExpiry');
      const flexiCardCVV = document.getElementById('flexiCardCVV');
      const flexiCardName = document.getElementById('flexiCardName');

      if (flexiCardNumber) flexiCardNumber.addEventListener('input', () => formatFlexiCardNumber(flexiCardNumber));
      if (flexiCardExpiry) flexiCardExpiry.addEventListener('input', () => formatFlexiExpiryDate(flexiCardExpiry));
      if (flexiCardCVV) flexiCardCVV.addEventListener('input', () => formatFlexiCVV(flexiCardCVV));
      if (flexiCardName) flexiCardName.addEventListener('input', validateFlexiCardInputs);
    });

    function executePaymentTransaction() {
      if (!selectedSeat) {
        notify('No active seat hold to commit!', 'error');
        return;
      }

      const confirmedSeat = selectedSeat;
      confirmedSeat.status = 'SOLD';
      confirmedSeat.locked_by = currentSessionId;
      confirmedSeat.expires_at = null;

      clearInterval(holdLockInterval);
      document.getElementById('globalHoldLockBanner').classList.add('inactive');
      document.getElementById('globalHoldLockText').textContent = "HOLD LOCK: 00:00 (TRANSACTION COMMITTED)";

      // Generate Ticket Serial
      const ticketSerial = `EP-${new Date().getFullYear()}-${activeEvent.id}-${Math.floor(Math.random()*8999+1000)}`;

      // Update GatePass View Data
      document.getElementById('ticketCardTitle').textContent = `${activeEvent.artist} | ${activeEvent.event}`;
      document.getElementById('ticketCardVenue').textContent = activeEvent.venue;
      document.getElementById('ticketCardSeat').textContent = confirmedSeat.seat_label;
      document.getElementById('ticketCardSerial').textContent = ticketSerial;
      document.getElementById('manualQrInput').value = ticketSerial;

      // Update QR Code
      updateQrCode(ticketSerial);

      // Log ACID Commit
      logSql(`<span class="sql-keyword">-- PAYMENT CONFIRMED VIA GCASH / MAYA</span>`);
      logSql(`<span class="sql-keyword">INSERT INTO</span> <span class="sql-table">transactions</span> (tx_id, session_id, event_id, seat_id, amount_php, status, created_at) <span class="sql-keyword">VALUES</span> ('TX-${Date.now()}', '${currentSessionId}', '${activeEvent.id}', '${confirmedSeat.seat_id}', ${confirmedSeat.base_price}, 'COMPLETED', NOW());`);
      logSql(`<span class="sql-keyword">UPDATE</span> <span class="sql-table">seats_inventory</span> <span class="sql-keyword">SET</span> status = '<span class="sql-func">SOLD</span>', barcode_token = '<span class="sql-func">${ticketSerial}</span>' <span class="sql-keyword">WHERE</span> seat_id = '${confirmedSeat.seat_id}';`);
      logSql(`<span class="sql-keyword">COMMIT</span>; <span class="sql-comment">-- ACID Transaction Finalized</span>`);

      // Record a confirmed order in the purchase ledger
      ordersDB.unshift({
        order_id: 'ORD-' + Date.now().toString(36).toUpperCase(),
        session_id: currentSessionId,
        event_id: activeEvent.id,
        artist: activeEvent.artist,
        event: activeEvent.event,
        venue: activeEvent.venue,
        seat_id: confirmedSeat.seat_id,
        seat_label: confirmedSeat.seat_label,
        base_price: confirmedSeat.base_price,
        ticket_serial: ticketSerial,
        status: 'ACTIVE',
        purchased_at: new Date().toLocaleString()
      });

      renderSeats();
      updateDbViewer();
      selectedSeat = null;

      // Step 2 complete: payment committed → unlocks GatePass and pushes through
      hasConfirmedPayment = true;
      updateProgressLocks();

      // Clear payment authorization after successful transaction
      awaitingPaymentFor = null;

      notify('Payment Successful! E-Ticket & GatePass generated.', 'success');
      setTimeout(() => switchView('gatepass'), 800);
    }

    /* ========================================================================= */
    /* 7. GATEPASS TURNSTILE SCANNER & OFFLINE QUEUE ENGINE                      */
    /* ========================================================================= */
    let qrcodeObj = null;

    function updateQrCode(payload = "EP-2026-TS-8921") {
      const qrElem = document.getElementById('qrcodeDisplay');
      if (!qrElem) return;
      qrElem.innerHTML = '';
      document.getElementById('qrRawPayload').textContent = `GATEPASS://AUTH/${payload}/SIG-SHA256`;

      if (typeof QRCode !== 'undefined') {
        qrcodeObj = new QRCode(qrElem, {
          text: `GATEPASS://AUTH/${payload}`,
          width: 130,
          height: 130,
          colorDark : "#0B0F19",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.H
        });
      }
    }

    function toggleOfflineMode() {
      isOnlineMode = !isOnlineMode;
      const icon = document.getElementById('wifiIcon');
      const text = document.getElementById('networkStatusText');

      if (isOnlineMode) {
        icon.className = "fa-solid fa-wifi";
        text.textContent = "Network: Online (Cloud Synced)";
        notify('Network Online: Offline turnstile logs synced to the central master system!', 'success');
        logSql(`<span class="sql-comment">-- GatePass Sync: Flushed offline buffer to central postgres master</span>`);
      } else {
        icon.className = "fa-solid fa-plane";
        text.textContent = "Network: OFFLINE (Local SQLite Cache)";
        notify('Turnstile switched to Offline-First SQLite Local Cache.', 'warning');
      }
    }

    function simulateGateScan() {
      const input = document.getElementById('manualQrInput').value.trim();
      const statusBox = document.getElementById('turnstileStatusBox');
      const timeStr = new Date().toLocaleTimeString();

      if (!input) {
        notify('Please provide a barcode / serial!', 'error');
        return;
      }

      // Anti-Replay duplicate entry fraud check
      const priorEntry = turnstileLogs.find(l => l.barcode === input && l.result === 'GRANTED');

      if (priorEntry) {
        statusBox.className = "turnstile-status-indicator status-denied";
        statusBox.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ACCESS DENIED: REPLAY FRAUD! BARCODE ALREADY USED AT ${priorEntry.time}`;
        notify(`Turnstile Alert: Duplicate ticket scan detected for ${input}!`, 'error');

        addTurnstileLog(timeStr, input, "Gate 04", "DENIED (DUPLICATE)", isOnlineMode ? "SYNCED" : "OFFLINE_QUEUED");
      } else {
        statusBox.className = "turnstile-status-indicator status-granted";
        statusBox.innerHTML = `<i class="fa-solid fa-circle-check"></i> ACCESS GRANTED • TURNSTILE UNLOCKED [GATE 04]`;
        notify(`Turnstile Access Granted for ${input}! Welcome to ${activeEvent.artist}!`, 'success');

        addTurnstileLog(timeStr, input, "Gate 04", "GRANTED", isOnlineMode ? "SYNCED" : "OFFLINE_QUEUED");

        // Show success pop-up with booking details after 7-second delay
        setTimeout(() => {
          showTurnstileSuccessModal(input, timeStr);
        }, 7000);
      }
    }

    function addTurnstileLog(time, barcode, gate, result, sync) {
      turnstileLogs.unshift({ time, barcode, gate, result, sync });
      const tbody = document.getElementById('turnstileLogsBody');
      const tr = document.createElement('tr');
      const resColor = result.includes('GRANTED') ? '#059669' : '#DC2626';

      tr.innerHTML = `
        <td>${time}</td>
        <td>${barcode}</td>
        <td>${gate}</td>
        <td><span style="color: ${resColor}; font-weight: bold;">${result}</span></td>
        <td>${sync}</td>
      `;
      tbody.prepend(tr);
    }

    /* ========================================================================= */
    /* 7B. TURNSTILE SUCCESS MODAL & PAYMENT DETAILS                             */
    /* ========================================================================= */
    let lastScannedTicketData = null;

    function showTurnstileSuccessModal(barcode, scanTime) {
      // Find the order from ordersDB that matches this barcode
      const order = ordersDB.find(o => o.ticket_serial === barcode);

      if (order) {
        lastScannedTicketData = {
          barcode: barcode,
          order: order,
          scanTime: scanTime,
          gate: 'Gate 04'
        };

        document.getElementById('tsSuccessEvent').textContent = `${order.artist} — ${order.event}`;
        document.getElementById('tsSuccessVenue').textContent = order.venue;
        document.getElementById('tsSuccessSeat').textContent = order.seat_label;
        document.getElementById('tsSuccessBarcode').textContent = barcode;
        document.getElementById('tsSuccessGate').textContent = 'Gate 04';
        document.getElementById('tsSuccessTime').textContent = scanTime;
      } else {
        // Fallback to active event data if order not found
        lastScannedTicketData = {
          barcode: barcode,
          order: null,
          scanTime: scanTime,
          gate: 'Gate 04'
        };

        document.getElementById('tsSuccessEvent').textContent = `${activeEvent.artist} — ${activeEvent.event}`;
        document.getElementById('tsSuccessVenue').textContent = activeEvent.venue;
        document.getElementById('tsSuccessSeat').textContent = 'N/A';
        document.getElementById('tsSuccessBarcode').textContent = barcode;
        document.getElementById('tsSuccessGate').textContent = 'Gate 04';
        document.getElementById('tsSuccessTime').textContent = scanTime;
      }

      document.getElementById('turnstileSuccessOverlay').classList.add('active');
    }

    function closeTurnstileSuccess() {
      document.getElementById('turnstileSuccessOverlay').classList.remove('active');
    }

    function showTurnstilePaymentDetails() {
      if (!lastScannedTicketData) return;

      const order = lastScannedTicketData.order;
      if (order) {
        document.getElementById('tsPayRefNo').textContent = order.order_id;
        document.getElementById('tsPayTxId').textContent = 'TX-' + Date.now().toString(36).toUpperCase();
        document.getElementById('tsPayEvent').textContent = `${order.artist} — ${order.event}`;
        document.getElementById('tsPayVenue').textContent = order.venue;
        document.getElementById('tsPaySeat').textContent = order.seat_label;
        document.getElementById('tsPaySerial').textContent = order.ticket_serial;
        document.getElementById('tsPayMethod').textContent = 'GCash / Maya';
        document.getElementById('tsPayAmount').textContent = '₱' + order.base_price.toLocaleString();
        document.getElementById('tsPayDate').textContent = order.purchased_at;
      } else {
        // Fallback
        document.getElementById('tsPayRefNo').textContent = 'ORD-' + Date.now().toString(36).toUpperCase();
        document.getElementById('tsPayTxId').textContent = 'TX-' + Date.now().toString(36).toUpperCase();
        document.getElementById('tsPayEvent').textContent = `${activeEvent.artist} — ${activeEvent.event}`;
        document.getElementById('tsPayVenue').textContent = activeEvent.venue;
        document.getElementById('tsPaySeat').textContent = 'N/A';
        document.getElementById('tsPaySerial').textContent = lastScannedTicketData.barcode;
        document.getElementById('tsPayMethod').textContent = 'GCash / Maya';
        document.getElementById('tsPayAmount').textContent = '₱50,000';
        document.getElementById('tsPayDate').textContent = new Date().toLocaleString();
      }

      document.getElementById('turnstileSuccessOverlay').classList.remove('active');
      document.getElementById('turnstilePaymentDetailsOverlay').classList.add('active');
    }

    function closeTurnstilePaymentDetails() {
      document.getElementById('turnstilePaymentDetailsOverlay').classList.remove('active');
      document.getElementById('turnstileSuccessOverlay').classList.add('active');
    }

    function closeTurnstilePaymentReturnDashboard() {
      document.getElementById('turnstilePaymentDetailsOverlay').classList.remove('active');
      switchView('events');
    }

    /* ========================================================================= */
    /* 7C. FLEXIPASS PURCHASE MODAL & TIER SELECTION                             */
    /* ========================================================================= */
    const FLEXIPASS_DATA = {
      metro: {
        name: 'Metro Manila Pop Pass 2026',
        coverage: 'Araneta + MOA Arena + New Frontier (3 Venues)',
        tiers: [
          { id: 'svip', name: 'All-Access SVIP Pass', perks: 'VIP sections + Meet & Greet + Exclusive merch', price: 32000 },
          { id: 'patron', name: 'Patron 3-Day Tier', perks: 'Lower Box seating + Priority entry', price: 18000 },
          { id: 'genad', name: 'Gen-Ad Multi-Pass', perks: 'General admission all 3 shows', price: 5500 }
        ]
      },
      bulacan: {
        name: 'Philippine Arena & Stadium Pass',
        coverage: 'Taylor Swift + Bruno Mars + BLACKPINK (3 Shows)',
        tiers: [
          { id: 'diamond', name: 'Diamond Pass (3 Shows)', perks: 'VIP all shows + Reserved parking + Lounge access', price: 85000 },
          { id: 'gold', name: 'Gold Lower Box', perks: 'Lower Box seating + Priority entry', price: 45000 },
          { id: 'silver', name: 'Silver Upper Box', perks: 'Upper Box seating all 3 shows', price: 18000 }
        ]
      }
    };

    let selectedFlexiPass = null;
    let selectedFlexiTier = null;
    let selectedFlexiPayMethod = 'GCash';

    function openFlexiPassPurchase(passType) {
      selectedFlexiPass = FLEXIPASS_DATA[passType];
      if (!selectedFlexiPass) return;

      document.getElementById('flexiPassModalPassName').textContent = selectedFlexiPass.name;

      // Render tier options
      const container = document.getElementById('flexiTierOptions');
      container.innerHTML = '';

      selectedFlexiPass.tiers.forEach((tier, index) => {
        const div = document.createElement('div');
        div.className = 'flexi-tier-option' + (index === 0 ? ' active' : '');
        div.onclick = () => selectFlexiTier(tier, div);
        div.innerHTML = `
          <div class="flexi-tier-info">
            <div class="flexi-tier-title">
              <i class="fa-solid fa-ticket-simple" style="color: #7C3AED;"></i>
              ${tier.name}
            </div>
            <div class="flexi-tier-perks">${tier.perks}</div>
          </div>
          <div class="flexi-tier-price-tag">₱${tier.price.toLocaleString()}</div>
        `;
        container.appendChild(div);
      });

      // Select first tier by default
      selectedFlexiTier = selectedFlexiPass.tiers[0];
      updateFlexiSummary();

      // Reset payment button to disabled state
      const payBtn = document.getElementById('btnFlexiPay');
      if (payBtn) payBtn.disabled = true;

      // Reset card fields if showing
      document.getElementById('flexiCardNumber').value = '';
      document.getElementById('flexiCardExpiry').value = '';
      document.getElementById('flexiCardCVV').value = '';
      document.getElementById('flexiCardName').value = '';

      document.getElementById('flexiPassPurchaseOverlay').classList.add('active');
    }

    function selectFlexiTier(tier, elem) {
      document.querySelectorAll('.flexi-tier-option').forEach(el => el.classList.remove('active'));
      elem.classList.add('active');
      selectedFlexiTier = tier;
      updateFlexiSummary();
    }

    function selectFlexiPayMethod(method, cardElem) {
      document.querySelectorAll('#flexiPassPurchaseOverlay .payment-radio-card').forEach(c => c.classList.remove('active'));
      cardElem.classList.add('active');
      selectedFlexiPayMethod = method;

      // Show/hide appropriate payment details
      const gcashLink = document.getElementById('flexiGcashLink');
      const mayaLink = document.getElementById('flexiMayaLink');
      const cardDetails = document.getElementById('flexiCardDetails');

      if (gcashLink) gcashLink.style.display = method === 'GCash' ? 'block' : 'none';
      if (mayaLink) mayaLink.style.display = method === 'Maya' ? 'block' : 'none';
      if (cardDetails) cardDetails.style.display = method === 'Card' ? 'block' : 'none';

      // Lock payment button for ALL payment methods initially
      const payBtn = document.getElementById('btnFlexiPay');
      if (payBtn) {
        if (method === 'Card') {
          // For Card: lock until all card fields are filled
          payBtn.disabled = true;
          validateFlexiCardInputs();
        } else {
          // For GCash/Maya: lock button - user must use popup to unlock
          payBtn.disabled = true;
          // Clear any previous payment authorization when switching methods
          if (awaitingPaymentFor === 'flexipass') {
            awaitingPaymentFor = null;
          }
        }
      }
    }

    function updateFlexiSummary() {
      if (!selectedFlexiPass || !selectedFlexiTier) return;

      document.getElementById('flexiSummaryPass').textContent = selectedFlexiPass.name;
      document.getElementById('flexiSummaryTier').textContent = selectedFlexiTier.name;
      document.getElementById('flexiSummaryCoverage').textContent = selectedFlexiPass.coverage;
      document.getElementById('flexiSummaryTotal').textContent = '₱' + selectedFlexiTier.price.toLocaleString();
      document.getElementById('btnFlexiPayText').textContent = 'CONFIRM & PAY ₱' + selectedFlexiTier.price.toLocaleString();

      // Lock payment button when tier changes
      const payBtn = document.getElementById('btnFlexiPay');
      if (payBtn) payBtn.disabled = true;
    }

    // Validate FlexiPass Card Inputs
    function validateFlexiCardInputs() {
      const cardNumber = document.getElementById('flexiCardNumber');
      const cardExpiry = document.getElementById('flexiCardExpiry');
      const cardCVV = document.getElementById('flexiCardCVV');
      const cardName = document.getElementById('flexiCardName');
      const payBtn = document.getElementById('btnFlexiPay');

      if (!cardNumber || !cardExpiry || !cardCVV || !cardName || !payBtn) return;

      const isValid =
        cardNumber.value.replace(/\s/g, '').length >= 16 &&
        cardExpiry.value.length === 5 &&
        cardCVV.value.length >= 3 &&
        cardName.value.trim().length > 0;

      payBtn.disabled = !isValid;
    }

    // Open GCash mock for FlexiPass
    function openFlexiGcashMock() {
      const amount = selectedFlexiTier ? selectedFlexiTier.price : 50000;
      const orderId = 'ORD-FP-' + Date.now().toString(36).toUpperCase();
      awaitingPaymentFor = 'flexipass'; // Mark that FlexiPass is waiting for payment
      window.open(`gcash-mock.html?amount=${amount}&ref=${orderId}`, 'flexiGcashPayment', 'width=480,height=800,resizable=yes');
      // Payment button will be enabled via postMessage when payment succeeds
    }

    // Open Maya mock for FlexiPass
    function openFlexiMayaMock() {
      const amount = selectedFlexiTier ? selectedFlexiTier.price : 50000;
      const orderId = 'ORD-FP-' + Date.now().toString(36).toUpperCase();
      awaitingPaymentFor = 'flexipass'; // Mark that FlexiPass is waiting for payment
      window.open(`maya-mock.html?amount=${amount}&ref=${orderId}`, 'flexiMayaPayment', 'width=480,height=800,resizable=yes');
      // Payment button will be enabled via postMessage when payment succeeds
    }

    function closeFlexiPassPurchase() {
      document.getElementById('flexiPassPurchaseOverlay').classList.remove('active');
      selectedFlexiPass = null;
      selectedFlexiTier = null;
      // Clear payment authorization when closing modal
      if (awaitingPaymentFor === 'flexipass') {
        awaitingPaymentFor = null;
      }
    }

    function executeFlexiPassPayment() {
      if (!selectedFlexiPass || !selectedFlexiTier) {
        notify('Please select a FlexiPass tier!', 'error');
        return;
      }

      const passSerial = `FP-${new Date().getFullYear()}-${selectedFlexiTier.id.toUpperCase()}-${Math.floor(Math.random()*8999+1000)}`;
      const orderId = 'ORD-' + Date.now().toString(36).toUpperCase();
      const purchaseTime = new Date().toLocaleString();

      // Add to ordersDB (for Purchase History)
      ordersDB.unshift({
        order_id: orderId,
        session_id: currentSessionId,
        event_id: 'FLEXIPASS-' + selectedFlexiTier.id,
        artist: selectedFlexiPass.name,
        event: selectedFlexiTier.name,
        venue: selectedFlexiPass.coverage,
        seat_id: passSerial,
        seat_label: 'FlexiPass — ' + selectedFlexiTier.name,
        base_price: selectedFlexiTier.price,
        ticket_serial: passSerial,
        status: 'ACTIVE',
        purchased_at: purchaseTime
      });

      // Log SQL
      logSql(`<span class="sql-keyword">-- FLEXIPASS PURCHASE CONFIRMED</span>`);
      logSql(`<span class="sql-keyword">INSERT INTO</span> <span class="sql-table">flexipass_orders</span> (order_id, session_id, pass_type, tier, amount_php, status) <span class="sql-keyword">VALUES</span> ('${orderId}', '${currentSessionId}', '${selectedFlexiPass.name}', '${selectedFlexiTier.name}', ${selectedFlexiTier.price}, 'ACTIVE');`);
      logSql(`<span class="sql-keyword">COMMIT</span>; <span class="sql-comment">-- FlexiPass Transaction Finalized</span>`);

      // Store for payment details modal
      lastFlexiPassPurchase = {
        orderId: orderId,
        passName: selectedFlexiPass.name,
        tierName: selectedFlexiTier.name,
        coverage: selectedFlexiPass.coverage,
        price: selectedFlexiTier.price,
        payMethod: selectedFlexiPayMethod,
        serial: passSerial,
        purchaseTime: purchaseTime
      };

      // Show success modal
      document.getElementById('flexiPassPurchaseOverlay').classList.remove('active');
      showFlexiPassSuccessModal();

      // Clear payment authorization after successful transaction
      awaitingPaymentFor = null;

      notify('FlexiPass Purchase Successful!', 'success');
    }

    let lastFlexiPassPurchase = null;

    function showFlexiPassSuccessModal() {
      if (!lastFlexiPassPurchase) return;

      document.getElementById('fpSuccessPass').textContent = lastFlexiPassPurchase.passName;
      document.getElementById('fpSuccessTier').textContent = lastFlexiPassPurchase.tierName;
      document.getElementById('fpSuccessAmount').textContent = '₱' + lastFlexiPassPurchase.price.toLocaleString();
      document.getElementById('fpSuccessPayMethod').textContent = lastFlexiPassPurchase.payMethod;
      document.getElementById('fpSuccessRefNo').textContent = lastFlexiPassPurchase.orderId;

      document.getElementById('flexiPassSuccessOverlay').classList.add('active');
    }

    function closeFlexiSuccess() {
      document.getElementById('flexiPassSuccessOverlay').classList.remove('active');
    }

    function showFlexiPaymentDetails() {
      if (!lastFlexiPassPurchase) return;

      document.getElementById('fpPayRefNo').textContent = lastFlexiPassPurchase.orderId;
      document.getElementById('fpPayTxId').textContent = 'TX-' + Date.now().toString(36).toUpperCase();
      document.getElementById('fpPayPassName').textContent = lastFlexiPassPurchase.passName;
      document.getElementById('fpPayTier').textContent = lastFlexiPassPurchase.tierName;
      document.getElementById('fpPayCoverage').textContent = lastFlexiPassPurchase.coverage;
      document.getElementById('fpPaySerial').textContent = lastFlexiPassPurchase.serial;
      document.getElementById('fpPayMethod').textContent = lastFlexiPassPurchase.payMethod;
      document.getElementById('fpPayAmount').textContent = '₱' + lastFlexiPassPurchase.price.toLocaleString();
      document.getElementById('fpPayDate').textContent = lastFlexiPassPurchase.purchaseTime;

      document.getElementById('flexiPassSuccessOverlay').classList.remove('active');
      document.getElementById('flexiPaymentDetailsOverlay').classList.add('active');
    }

    function closeFlexiPaymentDetails() {
      document.getElementById('flexiPaymentDetailsOverlay').classList.remove('active');
      document.getElementById('flexiPassSuccessOverlay').classList.add('active');
    }

    function closeFlexiPaymentReturnDashboard() {
      document.getElementById('flexiPaymentDetailsOverlay').classList.remove('active');
      switchView('events');
    }

    /* ========================================================================= */
    /* 8. SYSTEM INSPECTOR & SQL CONSOLE HELPER                                  */
    /* ========================================================================= */
    function logSql(htmlString) {
      const term = document.getElementById('sqlTerminal');
      if (!term) return;
      const line = document.createElement('div');
      line.className = 'sql-line';
      line.innerHTML = `[${new Date().toLocaleTimeString()}] ${htmlString}`;
      term.appendChild(line);
      term.scrollTop = term.scrollHeight;
    }

    function clearSqlConsole() {
      const term = document.getElementById('sqlTerminal');
      if (term) term.innerHTML = '';
      logSql(`<span class="sql-comment">-- Terminal Cleared. Listening for active ACID locks...</span>`);
    }

    function updateDbViewer() {
      const tbody = document.getElementById('dbInventoryTableBody');
      if (!tbody) return;
      tbody.innerHTML = '';

      inventoryDB.slice(0, 20).forEach(s => {
        const tr = document.createElement('tr');
        let statusStyle = 'color: #059669;';
        if (s.status === 'HELD') statusStyle = 'color: #D97706; font-weight: bold;';
        if (s.status === 'SOLD') statusStyle = 'color: #DC2626;';

        tr.innerHTML = `
          <td style="font-family: var(--font-mono);">${s.seat_id}</td>
          <td>${s.event_id}</td>
          <td>${s.section_name}</td>
          <td>${s.row_num}</td>
          <td>${s.seat_num}</td>
          <td style="font-family: var(--font-mono);">₱${s.base_price.toLocaleString()}</td>
          <td style="${statusStyle}">${s.status}</td>
          <td style="font-family: var(--font-mono); color: var(--text-muted);">${s.locked_by || 'NULL'}</td>
          <td style="font-family: var(--font-mono); color: var(--text-dim);">${s.expires_at ? s.expires_at.toLocaleTimeString() : 'NULL'}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function generateNewSession() {
      currentSessionId = `USR-${Math.floor(Math.random() * 8999 + 1000)}-PH`;
      document.getElementById('sessionBadge').textContent = `SESSION: #${currentSessionId}`;
      notify(`Session switched to ${currentSessionId}`, 'info');
      releaseCurrentHold();
    }

    function notify(message, type = 'info') {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;

      let icon = 'fa-info-circle';
      if (type === 'success') icon = 'fa-circle-check';
      if (type === 'warning') icon = 'fa-triangle-exclamation';
      if (type === 'error') icon = 'fa-circle-xmark';

      toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(50px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 4000);
    }

    /** Alias so auth JS calls to toast() resolve (notify preferred going forward) */
    function toast(message, type = 'info') {
      notify(message, type);
    }

    /* ========================================================================= */
    /* 8B. ADMIN CONSOLE — Sales Ledger & Live Inventory                        */
    /* ========================================================================= */

    /** Deterministic hash from event.id → [0,1) via LCG seeded by char codes */
    function _adminHash(eventId) {
      var seed = 0;
      for (var i = 0; i < eventId.length; i++) {
        seed = (seed * 31 + eventId.charCodeAt(i)) | 0;
      }
      var val = Math.abs(((seed * 1103515245 + 12345) & 0x7FFFFFFF));
      return (val % 10000) / 10000;
    }

    /** Build deterministic per-event sales ledger + global totals */
    function computeSalesLedger() {
      var ledger = [];
      var totalSold = 0;
      var totalRevenue = 0;
      var totalCapacity = 0;

      CONCERT_DATASET.forEach(function(ev) {
        var cap = parseInt(ev.capacity.replace(/,/g, ''), 10);
        totalCapacity += cap;
        var hashVal = _adminHash(ev.id);
        var fillPct = 12 + (hashVal * 83);   // 12–95%
        var sold = Math.round(cap * fillPct / 100);
        if (sold > cap) sold = cap;
        if (sold < 1) sold = 1;
        var seatsLeft = cap - sold;
        var avgPrice = ev.vipPriceNum * 0.18 + ev.lowerPriceNum * 0.42 + ev.upperPriceNum * 0.40;
        var revenue = Math.round(sold * avgPrice);
        totalSold += sold;
        totalRevenue += revenue;
        ledger.push({
          eventId: ev.id, artist: ev.artist, event: ev.event, category: ev.category,
          capacity: cap, capacityDisplay: ev.capacity,
          sold: sold, seatsLeft: seatsLeft, fillPct: fillPct.toFixed(1), revenue: revenue
        });
      });

      return {
        rows: ledger,
        totals: {
          totalCapacity: totalCapacity, totalSold: totalSold,
          totalRevenue: totalRevenue,
          globalFill: (totalSold / totalCapacity * 100).toFixed(1)
        }
      };
    }

    /** Render admin dashboard: stat cards + ledger + live inventory */
    function renderAdminConsole() {
      renderRefundLedger();
      var ledger = computeSalesLedger();
      var t = ledger.totals;

      // Stat cards
      var statsHtml = '';
      statsHtml += '<div class="admin-stat-card"><span class="stat-label">Total Events</span><span class="stat-value">' + CONCERT_DATASET.length + '</span><span class="stat-sub">Across all categories</span></div>';
      statsHtml += '<div class="admin-stat-card"><span class="stat-label">Total Capacity</span><span class="stat-value">' + t.totalCapacity.toLocaleString() + '</span><span class="stat-sub">Seats across all venues</span></div>';
      statsHtml += '<div class="admin-stat-card"><span class="stat-label">Tickets Sold</span><span class="stat-value">' + t.totalSold.toLocaleString() + '</span><span class="stat-sub">' + t.globalFill + '% average fill rate</span></div>';
      statsHtml += '<div class="admin-stat-card"><span class="stat-label">Gross Revenue</span><span class="stat-value">₱' + t.totalRevenue.toLocaleString() + '</span><span class="stat-sub">Estimated weighted revenue</span></div>';
      var statsGrid = document.getElementById('adminStatsGrid');
      if (statsGrid) statsGrid.innerHTML = statsHtml;

      // Ledger table rows
      var tbody = document.getElementById('adminLedgerBody');
      var tfoot = document.getElementById('adminLedgerFoot');
      if (tbody) {
        tbody.innerHTML = '';
        ledger.rows.forEach(function(row) {
          var tr = document.createElement('tr');
          tr.innerHTML =
            '<td style="font-family: var(--font-mono); font-weight: 600;">' + row.eventId + '</td>' +
            '<td>' + row.artist + '</td>' +
            '<td style="color: var(--text-muted);">' + row.category + '</td>' +
            '<td style="font-family: var(--font-mono);">' + row.capacityDisplay + '</td>' +
            '<td style="font-family: var(--font-mono); font-weight: 700; color: #059669;">' + row.sold.toLocaleString() + '</td>' +
            '<td style="font-family: var(--font-mono);">' + row.seatsLeft.toLocaleString() + '</td>' +
            '<td style="font-family: var(--font-mono);">' + row.fillPct + '%</td>' +
            '<td style="font-family: var(--font-mono); font-weight: 700; color: #B45309;">₱' + row.revenue.toLocaleString() + '</td>';
          tbody.appendChild(tr);
        });
      }
      if (tfoot) {
        tfoot.innerHTML =
          '<tr style="background: var(--bg-elevated); font-weight: 800;">' +
          '<td colspan="4" style="text-align: right;">GLOBAL TOTALS</td>' +
          '<td style="font-family: var(--font-mono); color: #059669;">' + t.totalSold.toLocaleString() + '</td>' +
          '<td style="font-family: var(--font-mono);">' + (t.totalCapacity - t.totalSold).toLocaleString() + '</td>' +
          '<td style="font-family: var(--font-mono);">' + t.globalFill + '%</td>' +
          '<td style="font-family: var(--font-mono); color: #B45309;">₱' + t.totalRevenue.toLocaleString() + '</td>' +
          '</tr>';
      }

      // Live inventory per section - find current active event index
      adminInventoryEventIndex = CONCERT_DATASET.findIndex(e => e.id === activeEvent.id);
      if (adminInventoryEventIndex === -1) adminInventoryEventIndex = 0;
      loadInventoryForEvent(adminInventoryEventIndex);

      // Render analytics charts
      renderAnalyticsCharts();
    }

    /* ========================================================================= */
    /* ADMIN INVENTORY EVENT NAVIGATION                                          */
    /* ========================================================================= */
    let adminInventoryEventIndex = 0; // Current event index for inventory viewer

    function updateInventoryEventDisplay() {
      // Update the event index display
      const indexSpan = document.getElementById('inventoryEventIndex');
      if (indexSpan) indexSpan.textContent = (adminInventoryEventIndex + 1);

      // Update button states
      const prevBtn = document.getElementById('btnPrevInventory');
      const nextBtn = document.getElementById('btnNextInventory');
      if (prevBtn) prevBtn.disabled = (adminInventoryEventIndex === 0);
      if (nextBtn) nextBtn.disabled = (adminInventoryEventIndex === CONCERT_DATASET.length - 1);
    }

    function prevInventoryEvent() {
      if (adminInventoryEventIndex > 0) {
        adminInventoryEventIndex--;
        loadInventoryForEvent(adminInventoryEventIndex);
      }
    }

    function nextInventoryEvent() {
      if (adminInventoryEventIndex < CONCERT_DATASET.length - 1) {
        adminInventoryEventIndex++;
        loadInventoryForEvent(adminInventoryEventIndex);
      }
    }

    function loadInventoryForEvent(index) {
      const event = CONCERT_DATASET[index];
      if (!event) return;

      // Update label
      const label = document.getElementById('adminActiveEventLabel');
      if (label) label.textContent = event.artist + ' — ' + event.event;

      // Generate inventory data for this event (simulated based on event ID)
      const invBody = document.getElementById('adminInventoryBody');
      if (invBody) {
        invBody.innerHTML = '';

        SEAT_SECTIONS.forEach(function(sec) {
          // Simulate different inventory states for different events
          const seedValue = event.id.charCodeAt(0) + event.id.charCodeAt(1);
          const total = sec.rows * sec.cols;

          // Different events have different sell-through rates (simulated)
          let soldPct = 0;
          if (event.featured) {
            soldPct = 0.65 + (seedValue % 20) / 100; // 65-85% for featured
          } else if (event.category === 'International') {
            soldPct = 0.45 + (seedValue % 25) / 100; // 45-70% for international
          } else {
            soldPct = 0.25 + (seedValue % 30) / 100; // 25-55% for P-Pop
          }

          const sold = Math.floor(total * soldPct);
          const held = Math.floor(total * 0.05 * (seedValue % 3)); // 0-10% held
          const avail = total - sold - held;
          const util = total > 0 ? ((sold + held) / total * 100).toFixed(0) : '0';

          const tr = document.createElement('tr');
          tr.innerHTML =
            '<td style="font-weight: 700;">' + sec.name + '</td>' +
            '<td style="color: var(--text-muted);">' + sec.tier + '</td>' +
            '<td style="font-family: var(--font-mono);">' + total + '</td>' +
            '<td class="admin-status-available">' + avail + '</td>' +
            '<td class="admin-status-held">' + held + '</td>' +
            '<td class="admin-status-sold">' + sold + '</td>' +
            '<td style="font-family: var(--font-mono);">' + util + '%</td>';
          invBody.appendChild(tr);
        });
      }

      updateInventoryEventDisplay();
      logSql('<span class="sql-comment">-- Admin: Switched inventory view to event ' + event.id + '</span>');
    }

    /* ========================================================================= */
    /* ANALYTICS CHART RENDERING                                                 */
    /* ========================================================================= */
    function renderAnalyticsCharts() {
      renderSalesByCategoryChart();
      renderRevenueBreakdownChart();
      renderFillRatesChart();
      renderRefundStatsChart();
    }

    function renderSalesByCategoryChart() {
      const container = document.getElementById('chartSalesByCategory');
      if (!container) return;

      const ledger = computeSalesLedger();
      const categoryData = {};

      ledger.rows.forEach(row => {
        if (!categoryData[row.category]) {
          categoryData[row.category] = { sold: 0, revenue: 0 };
        }
        categoryData[row.category].sold += row.sold;
        categoryData[row.category].revenue += row.revenue;
      });

      const totalSold = Object.values(categoryData).reduce((sum, cat) => sum + cat.sold, 0);

      let html = '<div class="chart-bar">';
      Object.entries(categoryData).forEach(([category, data]) => {
        const pct = totalSold > 0 ? (data.sold / totalSold * 100).toFixed(1) : 0;
        const colorClass = category === 'International' ? '' : 'green';
        html += `
          <div class="chart-bar-item">
            <span class="chart-bar-label">${category}</span>
            <div class="chart-bar-track">
              <div class="chart-bar-fill ${colorClass}" style="width: ${pct}%">
                ${data.sold.toLocaleString()}
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';

      html += `
        <div class="chart-stat-grid" style="margin-top: 1rem;">
          <div class="chart-stat-item">
            <div class="chart-stat-label">International</div>
            <div class="chart-stat-value blue">${categoryData['International']?.sold.toLocaleString() || 0}</div>
          </div>
          <div class="chart-stat-item">
            <div class="chart-stat-label">P-Pop & OPM</div>
            <div class="chart-stat-value green">${categoryData['P-Pop & OPM']?.sold.toLocaleString() || 0}</div>
          </div>
        </div>
      `;

      container.innerHTML = html;
    }

    function renderRevenueBreakdownChart() {
      const container = document.getElementById('chartRevenueBreakdown');
      if (!container) return;

      const ledger = computeSalesLedger();
      const topEvents = ledger.rows.slice(0, 5).sort((a, b) => b.revenue - a.revenue);
      const maxRevenue = Math.max(...topEvents.map(e => e.revenue), 1);

      let html = '<div class="chart-bar">';
      topEvents.forEach(event => {
        const pct = (event.revenue / maxRevenue * 100).toFixed(0);
        html += `
          <div class="chart-bar-item">
            <span class="chart-bar-label" style="font-size: 0.72rem; min-width: 100px;">${event.artist.substring(0, 12)}</span>
            <div class="chart-bar-track">
              <div class="chart-bar-fill amber" style="width: ${pct}%">
                ₱${(event.revenue / 1000).toFixed(0)}K
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';

      const totalRev = ledger.totals.totalRevenue;
      html += `
        <div class="chart-stat-grid" style="margin-top: 1rem;">
          <div class="chart-stat-item">
            <div class="chart-stat-label">Total Revenue</div>
            <div class="chart-stat-value amber">₱${(totalRev / 1000000).toFixed(2)}M</div>
          </div>
          <div class="chart-stat-item">
            <div class="chart-stat-label">Avg per Event</div>
            <div class="chart-stat-value amber">₱${(totalRev / CONCERT_DATASET.length / 1000).toFixed(0)}K</div>
          </div>
        </div>
      `;

      container.innerHTML = html;
    }

    function renderFillRatesChart() {
      const container = document.getElementById('chartFillRates');
      if (!container) return;

      const ledger = computeSalesLedger();
      const events = ledger.rows.slice(0, 6);
      const avgFill = ledger.totals.globalFill;

      let html = '<div class="chart-bar">';
      events.forEach(event => {
        const fillPct = parseFloat(event.fillPct);
        const colorClass = fillPct >= 70 ? 'green' : (fillPct >= 40 ? 'amber' : 'red');
        html += `
          <div class="chart-bar-item">
            <span class="chart-bar-label" style="font-size: 0.72rem; min-width: 100px;">${event.artist.substring(0, 12)}</span>
            <div class="chart-bar-track">
              <div class="chart-bar-fill ${colorClass}" style="width: ${fillPct}%">
                ${fillPct}%
              </div>
            </div>
          </div>
        `;
      });
      html += '</div>';

      html += `
        <div class="chart-stat-grid" style="margin-top: 1rem;">
          <div class="chart-stat-item">
            <div class="chart-stat-label">Avg Fill Rate</div>
            <div class="chart-stat-value blue">${avgFill}%</div>
          </div>
          <div class="chart-stat-item">
            <div class="chart-stat-label">High Performers</div>
            <div class="chart-stat-value green">${events.filter(e => parseFloat(e.fillPct) >= 70).length}</div>
          </div>
        </div>
      `;

      container.innerHTML = html;
    }

    function renderRefundStatsChart() {
      const container = document.getElementById('chartRefundStats');
      if (!container) return;

      const totalRefunds = refundsDB.length;
      const pendingRefunds = refundsDB.filter(r => r.status === 'PENDING').length;
      const approvedRefunds = refundsDB.filter(r => r.status === 'APPROVED').length;
      const totalRefundAmount = refundsDB.reduce((sum, r) => sum + (r.amount || 0), 0);

      const approvedPct = totalRefunds > 0 ? (approvedRefunds / totalRefunds * 100).toFixed(0) : 0;
      const pendingPct = totalRefunds > 0 ? (pendingRefunds / totalRefunds * 100).toFixed(0) : 0;

      let html = '<div class="chart-bar">';
      html += `
        <div class="chart-bar-item">
          <span class="chart-bar-label">Approved</span>
          <div class="chart-bar-track">
            <div class="chart-bar-fill green" style="width: ${approvedPct}%">
              ${approvedRefunds}
            </div>
          </div>
        </div>
        <div class="chart-bar-item">
          <span class="chart-bar-label">Pending</span>
          <div class="chart-bar-track">
            <div class="chart-bar-fill amber" style="width: ${pendingPct}%">
              ${pendingRefunds}
            </div>
          </div>
        </div>
      `;
      html += '</div>';

      html += `
        <div class="chart-stat-grid" style="margin-top: 1rem;">
          <div class="chart-stat-item">
            <div class="chart-stat-label">Total Refunds</div>
            <div class="chart-stat-value">${totalRefunds}</div>
          </div>
          <div class="chart-stat-item">
            <div class="chart-stat-label">Refund Amount</div>
            <div class="chart-stat-value red">₱${totalRefundAmount.toLocaleString()}</div>
          </div>
        </div>
      `;

      container.innerHTML = html;
    }

    /** Force-release every HELD seat back to AVAILABLE */
    function adminReleaseAllHolds() {
      var releasedCount = 0;
      inventoryDB.forEach(function(seat) {
        if (seat.status === 'HELD') {
          seat.status = 'AVAILABLE';
          seat.locked_by = null;
          seat.expires_at = null;
          releasedCount++;
        }
      });
      selectedSeat = null;
      clearInterval(holdLockInterval);
      holdLockTimeLeft = 0;
      updateTimerUI(0);
      var banner = document.getElementById('globalHoldLockBanner');
      if (banner) banner.classList.add('inactive');
      var bannerText = document.getElementById('globalHoldLockText');
      if (bannerText) bannerText.textContent = 'HOLD LOCK: 00:00 (NO ACTIVE LEASE)';
      var btnPay = document.getElementById('btnConfirmPay');
      if (btnPay) btnPay.disabled = true;
      var lockStatus = document.getElementById('detailLockStatus');
      if (lockStatus) lockStatus.textContent = 'NONE';
      renderSeats();
      updateDbViewer();
      renderAdminConsole();
      notify('Admin: Released ' + releasedCount + ' held locks back to AVAILABLE', 'success');
      logSql('<span class="sql-keyword">-- ADMIN FORCE RELEASE:</span> UPDATE inventory SET status=\'AVAILABLE\', locked_by=NULL WHERE status=\'HELD\'; <span class="sql-comment">-- Rows affected: ' + releasedCount + '</span>');
    }

    /** Re-seed the demo inventory to its original state */
    function adminResetDemo() {
      selectedSeat = null;
      clearInterval(holdLockInterval);
      holdLockTimeLeft = 0;
      updateTimerUI(0);
      initDatabase();   // re-seeds 72 seats + renderSeats + updateDbViewer
      renderAdminConsole();
      notify('Admin: Demo inventory reset to seed state', 'success');
      logSql('<span class="sql-keyword">-- ADMIN DEMO RESET:</span> DROP TABLE IF EXISTS seats_inventory; CREATE TABLE seats_inventory AS (<span class="sql-comment">-- 72 rows re-seeded</span>);');
    }

    /* ========================================================================= */
    /* 8C. PURCHASE HISTORY & REFUND ENGINE                                      */
    /* ========================================================================= */

    function renderPurchaseHistory() {
      var body = document.getElementById('historyBody');
      var empty = document.getElementById('historyEmptyState');
      var countLabel = document.getElementById('historyCountLabel');
      if (!body) return;
      var myOrders = ordersDB.filter(o => o.session_id === currentSessionId);
      var activeCount = myOrders.filter(o => o.status === 'ACTIVE').length;
      if (countLabel) countLabel.textContent = activeCount + ' Active';
      if (myOrders.length === 0) { body.innerHTML = ''; if (empty) empty.style.display = ''; return; }
      if (empty) empty.style.display = 'none';
      var html = '';
      myOrders.forEach(function(o) {
        var isRefunded = o.status === 'REFUNDED';
        var statusBadge = isRefunded
          ? '<span style="color:#DC2626;font-weight:700;">REFUNDED</span>'
          : '<span style="color:#059669;font-weight:700;">ACTIVE</span>';
        var actionCell = isRefunded
          ? '<span style="color:var(--text-muted);font-size:0.75rem;">Cancelled</span>'
          : '<button class="sim-btn" onclick="openRefundDialog(\'' + o.order_id + '\')" style="color:#F59E0B;border-color:rgba(245,158,11,0.3);"><i class="fa-solid fa-rotate-left"></i> Refund</button>';
        html += '<tr' + (isRefunded ? ' style="opacity:0.55;"' : '') + '>'
          + '<td><code style="font-size:0.78rem;">' + o.order_id + '</code></td>'
          + '<td>' + o.artist + ' — ' + o.event + '</td>'
          + '<td>' + o.seat_label + ' <code style="font-size:0.7rem;color:var(--text-muted);">' + o.ticket_serial + '</code></td>'
          + '<td style="font-weight:700;">₱' + o.base_price.toLocaleString() + '</td>'
          + '<td style="font-size:0.78rem;color:var(--text-muted);">' + o.purchased_at + '</td>'
          + '<td>' + statusBadge + '</td>'
          + '<td>' + actionCell + '</td>'
          + '</tr>';
      });
      body.innerHTML = html;
      renderConsumerRefundHistory();
    }

    function renderConsumerRefundHistory() {
      var body = document.getElementById('consumerRefundBody');
      var countLabel = document.getElementById('refundCountLabel');
      if (!body) return;
      var myRefunds = refundsDB.filter(r => r.session_id === currentSessionId);
      if (countLabel) countLabel.textContent = myRefunds.length + ' Requests';
      if (myRefunds.length === 0) { body.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:1.5rem;">No refund requests yet.</td></tr>'; return; }
      var html = '';
      myRefunds.forEach(function(r) {
        html += '<tr>'
          + '<td><code style="font-size:0.78rem;">' + r.refund_id + '</code></td>'
          + '<td><code style="font-size:0.78rem;">' + r.order_id + '</code></td>'
          + '<td>' + r.artist + ' — ' + r.event + '</td>'
          + '<td style="font-weight:700;">₱' + r.amount.toLocaleString() + '</td>'
          + '<td style="font-size:0.8rem;color:var(--text-muted);">' + r.reason + '</td>'
          + '<td style="font-size:0.78rem;color:#059669;">' + r.approved_at + '</td>'
          + '</tr>';
      });
      body.innerHTML = html;
    }

    function renderRefundLedger() {
      var body = document.getElementById('adminRefundBody');
      var countLabel = document.getElementById('adminRefundCountLabel');
      if (!body) return;
      if (countLabel) countLabel.textContent = refundsDB.length + ' Requests';
      if (refundsDB.length === 0) { body.innerHTML = '<tr><td colspan="9" style="text-align:center;color:var(--text-muted);padding:1.5rem;">No refund requests recorded.</td></tr>'; return; }
      var html = '';
      refundsDB.forEach(function(r) {
        html += '<tr>'
          + '<td><code style="font-size:0.78rem;">' + r.refund_id + '</code></td>'
          + '<td><code style="font-size:0.78rem;">' + r.order_id + '</code></td>'
          + '<td><code style="font-size:0.75rem;">' + r.session_id + '</code></td>'
          + '<td>' + r.artist + '</td>'
          + '<td>' + r.seat_label + '</td>'
          + '<td style="font-weight:700;">₱' + r.amount.toLocaleString() + '</td>'
          + '<td style="font-size:0.8rem;">' + r.reason + '</td>'
          + '<td style="font-size:0.78rem;">' + r.approved_at + '</td>'
          + '<td><span style="color:#059669;font-weight:700;">APPROVED</span></td>'
          + '</tr>';
      });
      body.innerHTML = html;
    }

    function openRefundDialog(orderId) {
      var order = ordersDB.find(o => o.order_id === orderId);
      if (!order || order.status !== 'ACTIVE') { notify('This order is no longer eligible for refund.', 'error'); return; }
      pendingRefundOrder = order;
      document.getElementById('refundSummaryOrder').textContent = order.order_id;
      document.getElementById('refundSummaryEvent').textContent = order.artist + ' — ' + order.event;
      document.getElementById('refundSummarySeat').textContent = order.seat_label;
      document.getElementById('refundSummaryAmount').textContent = '₱' + order.base_price.toLocaleString();
      document.getElementById('refundConfirmOverlay').classList.add('active');
    }

    function closeRefundDialog() {
      pendingRefundOrder = null;
      document.getElementById('refundConfirmOverlay').classList.remove('active');
    }

    function confirmRefundPurchase() {
      if (!pendingRefundOrder) return;
      var order = pendingRefundOrder;
      closeRefundDialog();

      // Mark order as refunded
      order.status = 'REFUNDED';

      // Free the seat back to available inventory
      var seat = inventoryDB.find(s => s.seat_id === order.seat_id);
      if (seat) {
        seat.status = 'AVAILABLE';
        seat.locked_by = null;
        seat.expires_at = null;
      }

      // Create refund record
      var refundId = 'REF-' + Date.now().toString(36).toUpperCase();
      var now = new Date().toLocaleString();
      refundsDB.unshift({
        refund_id: refundId,
        order_id: order.order_id,
        session_id: order.session_id,
        event_id: order.event_id,
        artist: order.artist,
        event: order.event,
        seat_id: order.seat_id,
        seat_label: order.seat_label,
        amount: order.base_price,
        reason: 'Consumer-initiated cancellation',
        approved_at: now
      });

      // SQL log
      logSql('<span class="sql-keyword">-- REFUND REQUEST APPROVED:</span> ' + refundId + ' for order ' + order.order_id);
      logSql('<span class="sql-keyword">UPDATE</span> <span class="sql-table">seats_inventory</span> <span class="sql-keyword">SET</span> status = \'AVAILABLE\', locked_by = NULL <span class="sql-keyword">WHERE</span> seat_id = \'' + order.seat_id + '\';');
      logSql('<span class="sql-keyword">DELETE FROM</span> <span class="sql-table">transactions</span> <span class="sql-keyword">WHERE</span> order_id = \'' + order.order_id + '\';');
      logSql('<span class="sql-keyword">INSERT INTO</span> <span class="sql-table">refunds</span> (refund_id, order_id, session_id, amount_php, status) <span class="sql-keyword">VALUES</span> (\'' + refundId + '\', \'' + order.order_id + '\', \'' + order.session_id + '\', ' + order.base_price + ', \'APPROVED\');');
      logSql('<span class="sql-keyword">COMMIT</span>; <span class="sql-comment">-- Refund Transaction Finalized</span>');

      renderSeats();
      updateDbViewer();
      renderPurchaseHistory();
      renderAdminConsole();

      notify('Refund processed. ₱' + order.base_price.toLocaleString() + ' will be credited back.', 'success');
    }

    // Add switchView hook for history
    (function() {
      var _origSwitchView = switchView;
      window.switchView = function(viewName) {
        _origSwitchView(viewName);
        if (viewName === 'history') renderPurchaseHistory();
      };
    })();

    /* ========================================================================= */
    /* 9. ONLOAD BOOTSTRAP                                                       */
    /* ========================================================================= */
    window.addEventListener('DOMContentLoaded', () => {
      renderEvents('ALL');
      initDatabase();
      updateQrCode();
      updateProgressLocks();   // render initial locked state for step-gated nav + stepper

      // Initialize SeatLock checkout panel - hide payment sections by default
      document.getElementById('noSeatSelectedMessage').style.display = '';
      document.getElementById('seatDetailsContent').style.display = 'none';
      document.getElementById('paymentMethodSection').style.display = 'none';
      document.getElementById('confirmPaySection').style.display = 'none';

      logSql(`<span class="sql-keyword">-- ENTRYPULSE / SEATLOCK 360 SYSTEM KERNEL INITIALIZED</span>`);
      logSql(`<span class="sql-keyword">SET TRANSACTION ISOLATION LEVEL REPEATABLE READ</span>;`);
      logSql(`<span class="sql-comment">-- Database schema loaded: 16 concerts, 9 venues, 6 stadium sections</span>`);
    });

    // Track which modal is currently waiting for payment authorization
    let awaitingPaymentFor = null; // 'seatlock' or 'flexipass'

    // Listen for payment success messages from GCash/Maya popup windows
    window.addEventListener('message', (event) => {
      if (event.data.type === 'PAYMENT_SUCCESS') {
        // Only enable the button for the modal that initiated the payment
        if (awaitingPaymentFor === 'seatlock') {
          const payBtn = document.getElementById('btnConfirmPay');
          if (payBtn) {
            payBtn.disabled = false;
            notify(`${event.data.method} payment authorized! You can now confirm your order.`, 'success');
            logSql(`<span class="sql-comment">-- ${event.data.method} Payment Authorization Received</span>`);
          }
          awaitingPaymentFor = null; // Clear after use
        } else if (awaitingPaymentFor === 'flexipass') {
          const flexiPayBtn = document.getElementById('btnFlexiPay');
          if (flexiPayBtn) {
            flexiPayBtn.disabled = false;
            notify(`${event.data.method} payment authorized! You can now confirm your FlexiPass order.`, 'success');
            logSql(`<span class="sql-comment">-- ${event.data.method} Payment Authorization Received (FlexiPass)</span>`);
          }
          awaitingPaymentFor = null; // Clear after use
        }
      }
    });

    /* ========================================================================= */
    /* 10. AUTHENTICATION, RBAC & ACCOUNT MANAGEMENT SYSTEM                       */
    /* ========================================================================= */
    const ACCOUNTS = {};

    let currentUser = null;
    let currentAuthMode = 'login';
    let fpVerificationCode = '';
    let fpEmail = '';

    /* --- UI Helpers --- */
    function openLoginModal() {
      document.getElementById('loginOverlay').classList.remove('hidden');
      document.getElementById('loginOverlay').style.display = 'flex';
      switchAuth('login');
      setTimeout(function() { document.getElementById('authEmail').focus(); }, 100);
    }

    function closeLoginModal() {
      if (currentUser) return; // Don't close if logged in
      document.getElementById('loginOverlay').classList.add('hidden');
      document.getElementById('loginOverlay').style.display = 'none';
    }

    function switchAuth(mode) {
      currentAuthMode = mode;
      document.getElementById('tabLogin').classList.toggle('on', mode === 'login');
      document.getElementById('tabSignup').classList.toggle('on', mode === 'signup');
      document.getElementById('loginMode').style.display = mode === 'login' ? '' : 'none';
      document.getElementById('signupMode').style.display = mode === 'signup' ? '' : 'none';
      document.getElementById('authSubmit').textContent = mode === 'login' ? 'Continue' : 'Create account';
      document.getElementById('authSubmit').onclick = mode === 'login' ? function() { mockLogin(); } : function() { signup(); };
      clearAuthError();
      // Reset strength bars
      var sb = document.getElementById('suStrength');
      var sl = document.getElementById('suStrengthLabel');
      var sm = document.getElementById('suMatchMsg');
      if (sb) sb.className = 'fp-strength';
      if (sl) { sl.textContent = ''; sl.className = 'pw-strength-label'; }
      if (sm) { sm.textContent = ''; sm.className = 'fp-match'; }
    }

    function clearAuthError() {
      var el = document.getElementById('authError');
      if (el) { el.textContent = ''; el.classList.remove('show'); }
      document.querySelectorAll('.login-fields input.err').forEach(function(i) { i.classList.remove('err'); });
    }

    function showAuthError(msg, ids) {
      var el = document.getElementById('authError');
      el.textContent = msg;
      el.classList.add('show');
      if (ids) ids.forEach(function(id) {
        var i = document.getElementById(id);
        if (i) i.classList.add('err');
      });
      var first = document.getElementById(ids && ids[0]);
      if (first) first.focus();
    }

    /* --- Login Handler --- */
    function mockLogin(provider) {
      clearAuthError();
      if (provider) {
        showAuthError(provider + ' sign-in is not configured for database authentication.');
        return;
      }
      var email = document.getElementById('authEmail').value.trim().toLowerCase();
      var pass = document.getElementById('authPass').value;
      if (!email && !pass) { showAuthError('Please enter your username and password.', ['authEmail', 'authPass']); return; }
      if (!email) { showAuthError('Please enter your username or email address.', ['authEmail']); return; }
      if (!pass) { showAuthError('Please enter your password.', ['authPass']); return; }
      var acc = ACCOUNTS[email] && ACCOUNTS[email].pass === pass ? ACCOUNTS[email] : null;
      if (!acc) { showAuthError('Incorrect username or password. Try again.', ['authEmail', 'authPass']); return; }
      currentUser = email;
      finalizeLogin();
      notify(acc.greeting, 'success');
      logSql('<span class="sql-keyword">-- SESSION AUTHENTICATED:</span> User=' + acc.name + ', Role=' + acc.role.toUpperCase());
    }

    function finalizeLogin() {
      var acc = ACCOUNTS[currentUser];

      // Start each session at Step 1: no event chosen → SeatLock 360 & GatePass locked
      resetStepProgress();
      document.getElementById('loginOverlay').classList.add('hidden');
      document.getElementById('loginOverlay').style.display = 'none';
      // Update nav bar
      document.getElementById('loginNavBtn').style.display = 'none';
      document.getElementById('logoutNavBtn').style.display = '';
      document.getElementById('userPillCard').style.display = 'flex';
      document.getElementById('userDisplayName').textContent = acc.name;
      var roleBadge = document.getElementById('userRoleBadge');
      var avatar = document.getElementById('userAvatarCircle');
      roleBadge.textContent = acc.role.toUpperCase();
      roleBadge.className = 'user-role-badge ' + (acc.role === 'admin' ? 'role-admin' : 'role-user');
      avatar.className = 'user-avatar-circle' + (acc.role === 'admin' ? ' admin-avatar' : '');
      avatar.innerHTML = acc.role === 'admin' ? '<i class="fa-solid fa-shield-halved"></i>' : '<i class="fa-solid fa-user"></i>';
      currentSessionId = 'USR-' + Math.floor(Math.random() * 8999 + 1000) + '-PH';
      document.getElementById('sessionBadge').textContent = 'SESSION: #' + currentSessionId;

      // Admin gets access to admin console view — switch to admin shell
      if (acc.role === 'admin') {
        document.body.classList.add('admin-view');
        document.getElementById('adminNavBtn').style.display = '';
        document.getElementById('adminViewToggleBtn').style.display = '';
        document.getElementById('navTabsContainer').classList.add('admin-mode');
        switchView('admin');
        notify('Admin console unlocked. Full system access granted.', 'success');
        logSql('<span class="sql-keyword">-- ADMIN CONSOLE:</span> Elevated privileges granted to ' + acc.name);
        logSql('<span class="sql-keyword">-- VIEW SWITCH:</span> Admin shell activated. Consumer views hidden.');
      } else {
        document.body.classList.remove('admin-view');
        document.body.classList.remove('admin-user-view');
      }
    }

    function handleUserPillClick() {
      if (!currentUser) {
        openLoginModal();
      } else if (ACCOUNTS[currentUser].role === 'admin') {
        switchView('admin');
      } else {
        toast('Logged in as ' + ACCOUNTS[currentUser].name + ' (' + ACCOUNTS[currentUser].role + ')');
      }
    }

    /* --- Admin User View Toggle Functions --- */
    function toggleAdminUserView() {
      if (!currentUser || ACCOUNTS[currentUser].role !== 'admin') return;

      var toggleBtn = document.getElementById('adminViewToggleBtn');
      var isCurrentlyInUserView = document.body.classList.contains('admin-user-view');

      if (isCurrentlyInUserView) {
        // Return to Admin Console
        document.body.classList.remove('admin-user-view');
        switchView('admin');

        // Change button back to "User View"
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i> User View';

        notify('Returned to Admin Console.', 'success');
        logSql('<span class="sql-keyword">-- ADMIN CONSOLE:</span> Returned to admin dashboard view');
      } else {
        // Switch to User View
        document.body.classList.add('admin-user-view');
        switchView('events');

        // Change button to "Admin Mode"
        toggleBtn.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Admin Mode';

        notify('Switched to User View. You can now see the interface as a regular user.', 'info');
        logSql('<span class="sql-keyword">-- ADMIN USER VIEW:</span> Simulating regular user perspective with developer controls enabled');
      }
    }

    /* --- Signup Handler --- */
    function signup() {
      clearAuthError();
      var user = document.getElementById('suUser').value.trim();
      var email = document.getElementById('suEmail').value.trim().toLowerCase();
      var pass = document.getElementById('suPass').value;
      var pass2 = document.getElementById('suPass2').value;
      var missing = [];
      if (!user) missing.push('suUser');
      if (!email) missing.push('suEmail');
      if (!pass) missing.push('suPass');
      if (!pass2) missing.push('suPass2');
      if (missing.length) { showAuthError('Please fill in all fields to create your account.', missing); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { showAuthError('Please enter a valid email address.', ['suEmail']); return; }
      if (pass.length < 6) { showAuthError('Password must be at least 6 characters.', ['suPass']); return; }
      if (pass !== pass2) { showAuthError('Passwords do not match. Please re-enter.', ['suPass', 'suPass2']); return; }
      if (ACCOUNTS[email]) { showAuthError('An account with this email already exists. Try logging in instead.', ['suEmail']); return; }
      // Create account
      ACCOUNTS[email] = {
        pass: pass, role: 'user', name: user,
        tagline: 'Regular User &middot; Event Attendee',
        greeting: 'Welcome, ' + user + '!'
      };
      document.getElementById('verifyEmail').textContent = email;
      document.getElementById('authCard').style.display = 'none';
      document.getElementById('verifyPage').style.display = '';
      ['suUser', 'suEmail', 'suPass', 'suPass2'].forEach(function(id) {
        var e = document.getElementById(id);
        if (e) e.value = '';
      });
      var sb = document.getElementById('suStrength');
      var sl = document.getElementById('suStrengthLabel');
      var sm = document.getElementById('suMatchMsg');
      if (sb) sb.className = 'fp-strength';
      if (sl) { sl.textContent = ''; sl.className = 'pw-strength-label'; }
      if (sm) { sm.textContent = ''; sm.className = 'fp-match'; }
      logSql('<span class="sql-keyword">-- NEW ACCOUNT CREATED:</span> User=' + user + ', Email=' + email);
    }

    /* --- Logout --- */
    function logout() {
      currentUser = null;
      resetStepProgress();   // lock SeatLock 360 & GatePass until an event is chosen again
      document.getElementById('loginNavBtn').style.display = '';
      document.getElementById('logoutNavBtn').style.display = 'none';
      document.getElementById('userPillCard').style.display = 'none';
      // Restore consumer shell — hide admin tab, remove admin mode, show consumer tabs
      document.getElementById('adminNavBtn').style.display = 'none';
      document.getElementById('adminViewToggleBtn').style.display = 'none';
      // Reset toggle button to default state
      document.getElementById('adminViewToggleBtn').innerHTML = '<i class="fa-solid fa-eye"></i> User View';
      document.getElementById('navTabsContainer').classList.remove('admin-mode');
      document.getElementById('authPass').value = '';
      document.body.classList.remove('admin-view');
      document.body.classList.remove('admin-user-view');
      document.getElementById('verifyPage').style.display = 'none';
      document.getElementById('authCard').style.display = '';
      switchView('events');
      openLoginModal();
      clearAuthError();
      notify('Logged out successfully.', 'info');
      logSql('<span class="sql-keyword">-- SESSION TERMINATED:</span> All locks released');
      releaseCurrentHold();
    }

    function backToLogin() {
      document.getElementById('verifyPage').style.display = 'none';
      document.getElementById('authCard').style.display = '';
      switchAuth('login');
      ['suUser', 'suEmail', 'suPass', 'suPass2', 'authPass'].forEach(function(id) {
        var e = document.getElementById(id);
        if (e) e.value = '';
      });
      fpEmail = '';
      var fpE = document.getElementById('fpEmail');
      if (fpE) fpE.value = '';
      document.querySelectorAll('#fpCodeInputs input').forEach(function(b) { b.value = ''; b.className = ''; });
      ['fpNewPass', 'fpConfirmPass'].forEach(function(id) {
        var e = document.getElementById(id);
        if (e) e.value = '';
      });
      var fm = document.getElementById('fpMatchMsg');
      if (fm) { fm.textContent = ''; fm.className = 'fp-match'; }
      var fs = document.getElementById('fpStrength');
      if (fs) fs.className = 'fp-strength';
      var fl = document.getElementById('fpStrengthLabel');
      if (fl) { fl.textContent = ''; fl.className = 'pw-strength-label'; }
      ['fpPage1', 'fpPage2', 'fpPage3', 'fpPage4'].forEach(function(id) {
        document.getElementById(id).classList.remove('active');
      });
      document.querySelectorAll('.fp-pass-wrap .fp-toggle').forEach(function(b) {
        b.innerHTML = '<i class="fa-regular fa-eye"></i>';
      });
      ['fpNewPass', 'fpConfirmPass', 'suPass', 'suPass2'].forEach(function(id) {
        var e = document.getElementById(id);
        if (e) e.type = 'password';
      });
    }

    /* --- Forgot Password Flow --- */
    function openForgotPassword() {
      fpEmail = '';
      document.getElementById('authCard').style.display = 'none';
      document.getElementById('verifyPage').style.display = 'none';
      fpGoTo(1);
      clearAuthError();
      setTimeout(function() { var e = document.getElementById('fpEmail'); if (e) e.focus(); }, 60);
    }

    function fpGoTo(n) {
      for (var i = 1; i <= 4; i++) document.getElementById('fpPage' + i).classList.toggle('active', i === n);
      document.getElementById('fpError1').classList.remove('show');
      document.getElementById('fpError2').classList.remove('show');
      document.getElementById('fpError3').classList.remove('show');
    }

    function clearFpError() {
      var cur = document.querySelector('.fp-page.active');
      if (!cur) return;
      cur.querySelectorAll('.auth-err').forEach(function(el) { el.classList.remove('show'); el.textContent = ''; });
      cur.querySelectorAll('.fp-code-inputs input.err').forEach(function(el) { el.classList.remove('err'); });
    }

    function fpShowError(msg, id) {
      var el = document.getElementById(id);
      if (el) { el.textContent = msg; el.classList.add('show'); }
    }

    function fpSendCode() {
      var email = document.getElementById('fpEmail').value.trim().toLowerCase();
      if (!email) { fpShowError('Please enter your email address.', 'fpError1'); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { fpShowError('Please enter a valid email address.', 'fpError1'); return; }
      fpEmail = email;
      fpVerificationCode = String(Math.floor(10000 + Math.random() * 90000));
      document.getElementById('fpEmailDisplay').textContent = email;
      fpGoTo(2);
      setTimeout(function() { document.getElementById('fpCodeInputs').querySelector('input').focus(); }, 60);
      toast('Demo verification code: ' + fpVerificationCode);
    }

    function fpCodeNext(input, i) {
      input.value = input.value.replace(/[^0-9]/g, '').slice(0, 1);
      var boxed = document.getElementById('fpCodeInputs').querySelectorAll('input');
      boxed[i].classList.toggle('filled', input.value !== '');
      boxed[i].classList.remove('err');
      document.getElementById('fpError2').classList.remove('show');
      if (input.value && i < 4) boxed[i + 1].focus();
      if (input.value && i === 4) fpVerifyCode();
    }

    function fpCodeKey(ev, i) {
      var boxed = document.getElementById('fpCodeInputs').querySelectorAll('input');
      if (ev.key === 'Backspace' && boxed[i].value === '' && i > 0) {
        boxed[i - 1].focus();
        boxed[i - 1].value = '';
        boxed[i - 1].classList.remove('filled');
      }
    }

    function fpVerifyCode() {
      clearFpError();
      var code = '';
      document.getElementById('fpCodeInputs').querySelectorAll('input').forEach(function(b) { code += b.value; });
      if (code.length < 5) { fpShowError('Please enter the 5-digit code.', 'fpError2'); return; }
      var boxed = document.getElementById('fpCodeInputs').querySelectorAll('input');
      if (code !== fpVerificationCode) {
        fpShowError('Incorrect code. Please try again.', 'fpError2');
        boxed.forEach(function(b) { b.classList.add('err'); b.value = ''; b.classList.remove('filled'); });
        boxed[0].focus();
        return;
      }
      fpGoTo(3);
      setTimeout(function() { document.getElementById('fpNewPass').focus(); }, 60);
    }

    function fpResendCode() {
      if (!fpEmail) fpGoTo(1);
      toast('Code resent to ' + fpEmail);
    }

    /* --- Password Visibility Toggle --- */
    function fpTogglePass(id, btn) {
      var inp = document.getElementById(id);
      var show = inp.type === 'password';
      inp.type = show ? 'text' : 'password';
      btn.innerHTML = show ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
    }

    /* --- Password Strength (3-segment bar) --- */
    function pwLevel(v) {
      if (!v) return { level: '', label: '' };
      var len = v.length;
      var specials = (v.match(/[^A-Za-z0-9]/g) || []).length;
      var mixed = /[a-z]/.test(v) && /[A-Z]/.test(v);
      var digit = /\d/.test(v);
      if (len >= 12 || (len >= 6 && specials >= 3))
        return { level: 'strong', label: 'Strong' };
      var s = 0;
      if (len >= 8) s++;
      if (mixed) s++;
      if (digit) s++;
      if (specials) s++;
      return s >= 2 ? { level: 'medium', label: 'Medium' } : { level: 'weak', label: 'Weak' };
    }

    function applyStrength(inpId, barId, labelId) {
      var r = pwLevel(document.getElementById(inpId).value);
      var bar = document.getElementById(barId);
      bar.className = 'fp-strength' + (r.level ? ' ' + r.level : '');
      var lab = document.getElementById(labelId);
      if (lab) {
        lab.textContent = r.label;
        lab.className = 'pw-strength-label' + (r.level ? ' ' + r.level : '');
      }
    }

    function suCheckStrength() {
      applyStrength('suPass', 'suStrength', 'suStrengthLabel');
      checkSignupMatch();
    }

    function checkSignupMatch() {
      var p1 = document.getElementById('suPass').value;
      var p2 = document.getElementById('suPass2').value;
      var msg = document.getElementById('suMatchMsg');
      if (!p2) { msg.textContent = ''; msg.className = 'fp-match'; return; }
      if (p1 === p2) { msg.textContent = '✓ Passwords match'; msg.className = 'fp-match ok'; }
      else { msg.textContent = '✗ Passwords do not match'; msg.className = 'fp-match no'; }
    }

    function fpCheckStrength() {
      applyStrength('fpNewPass', 'fpStrength', 'fpStrengthLabel');
      fpCheckMatch();
    }

    function fpCheckMatch() {
      var p1 = document.getElementById('fpNewPass').value;
      var p2 = document.getElementById('fpConfirmPass').value;
      var msg = document.getElementById('fpMatchMsg');
      if (!p2) { msg.textContent = ''; msg.className = 'fp-match'; return; }
      if (p1 === p2) { msg.textContent = '✓ Passwords match'; msg.className = 'fp-match ok'; }
      else { msg.textContent = '✗ Passwords do not match'; msg.className = 'fp-match no'; }
    }

    function fpResetPassword() {
      var p1 = document.getElementById('fpNewPass').value;
      var p2 = document.getElementById('fpConfirmPass').value;
      if (!p1) { fpShowError('Please enter a new password.', 'fpError3'); return; }
      if (p1.length < 6) { fpShowError('Password must be at least 6 characters.', 'fpError3'); return; }
      if (!p2) { fpShowError('Please confirm your new password.', 'fpError3'); return; }
      if (p1 !== p2) { fpShowError('Passwords do not match. Please re-enter.', 'fpError3'); return; }
      if (ACCOUNTS[fpEmail]) ACCOUNTS[fpEmail].pass = p1;
      document.getElementById('fpNewPass').value = '';
      document.getElementById('fpConfirmPass').value = '';
      document.getElementById('fpMatchMsg').textContent = '';
      document.getElementById('fpMatchMsg').className = 'fp-match';
      document.getElementById('fpStrength').className = 'fp-strength';
      document.getElementById('fpStrengthLabel').textContent = '';
      document.getElementById('fpStrengthLabel').className = 'pw-strength-label';
      fpGoTo(4);
      toast('Password changed successfully');
      logSql('<span class="sql-keyword">-- PASSWORD RESET:</span> Account ' + fpEmail + ' updated');
    }

    /* --- Show login on load --- */
    window.addEventListener('DOMContentLoaded', function() {
      setTimeout(function() { openLoginModal(); }, 300);
    });
